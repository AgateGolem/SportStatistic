import "../styles/styles.scss";
import "../styles/nullstyle.css";
import React, { Component } from "react";
import axios from 'axios';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';


export default class CalendarLeague extends Component {

    constructor(props) {
        super(props);
        this.state = { matches: [], name: "", value: [new Date(), new Date()] }
        this.API_KEY = process.env.REACT_APP_API_KEY

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        console.log(value);
        let data = {
            headers: {
                "X-Auth-Token": this.API_KEY
            }
        }
        var year = value[0].getFullYear();
        var month = value[0].getMonth() + 1;
        if (month >= 0 && month <= 9) {
            month = '0' + month;
        }
        var day = value[0].getDate();
        if (day >= 0 && day <= 9) {
            day = '0' + day;
        }
        var dateFirst = year + "-" + month + "-" + day;

        var year = value[1].getFullYear();
        var month = value[1].getMonth() + 1;
        if (month >= 0 && month <= 9) {
            month = '0' + month;
        }
        var day = value[1].getDate();
        if (day >= 0 && day <= 9) {
            day = '0' + day;
        }
        var dateLast = year + "-" + month + "-" + day;

        this.setState({ value: [dateFirst, dateLast] })
        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id + '/matches?dateFrom=' + dateFirst + '&dateTo=' + dateLast, data)
            .then(response => {
                console.log(response);
                this.setState({ matches: response.data.matches });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        //
        let data = {
            headers: {
                "X-Auth-Token": this.API_KEY
            }
        }

        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id + '/matches?season=2020', data)
            .then(response => {
                console.log(response);
                this.setState({ matches: response.data.matches });
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id, data)
            .then(response => {
                console.log(response);
                this.setState({ name: response.data.name });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    seasonsList() {
        return this.state.seasons.map(function (season, i) {
            return <option value={season.startDate}>
                {season.startDate}/{season.endDate}
            </option>
        })
    }

    matchList(){
        return this.state.matches.map(function(match, i){
            return <tr>
                <td>{match.utcDate.substring(11,16)}</td>
                <td>{match.utcDate.substring(0,10)}</td>
                <td>{match.homeTeam.name}</td>
                <td>{match.score.fullTime.homeTeam}:{match.score.fullTime.awayTeam}</td>
                <td>{match.awayTeam.name}</td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <header class="header">
                    <div class="header__text">
                        SOCCER <br /> STAT
                    </div>
                </header>
                <div class="inf">
                    <div class="inf__title">
                        {this.state.name}
                    </div>
                    <div class="inf__season">
                        <div class="DateRangePicker">
                            <DateRangePicker
                                onChange={(value) => this.handleOnChange(value)}
                                value={this.state.value}
                                format="yyyy-MM-dd"
                            />
                        </div>
                    </div>
                    <div class="inf__content">
                        <table class="inf__content__table matches">
                            <tbody>
                                {this.matchList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}