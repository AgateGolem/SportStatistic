import "../styles/styles.scss";
import "../styles/nullstyle.css";
import React, { Component } from "react";
import axios from 'axios';


export default class CalendarLeague extends Component {

    constructor(props) {
        super(props);
        this.state = { matches: [], seasons: [], value: "", name: "" }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let data = {
            headers: {
                "X-Auth-Token": '1a8cc8943cb9441d861c456e2be88ac9'
            }
        }
        this.setState({ value: event.target.value });
        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id + '/matches?season=' + this.state.value.substring(0, 4), data)
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
                "X-Auth-Token": '1a8cc8943cb9441d861c456e2be88ac9'
            }
        }

        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id + '/matches', data)
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
                this.setState({ seasons: response.data.seasons, name: response.data.name });
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
                        SOCCER STAT
                    </div>
                </header>
                <div class="inf">
                    <div class="inf__title">
                        {this.state.name}
                    </div>
                    <div class="inf__season">
                        <div class="inf__season__seasonText">Сезон</div>
                        <div class="inf__season__select">
                            <select onChange={this.handleChange} class="inf__season__select__selector">
                                {this.seasonsList()}
                            </select>
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