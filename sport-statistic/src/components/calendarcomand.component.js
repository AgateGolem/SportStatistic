import "../styles/styles.scss";
import "../styles/nullstyle.css";
import React, { Component,} from "react";
import axios from 'axios';

export default class CalendarComand extends Component{
    constructor(props) {
        super(props);
        this.state = { matches: [], name: "", valueFirst:'', valueLast:'' }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange1(event){
        this.setState({valueFirst: event.target.value});
    }
    handleChange2(event) {
        this.setState({ valueLast: event.target.value });
    }

    handleSubmit(event) {
        let data = {
            headers: {
                "X-Auth-Token": '1a8cc8943cb9441d861c456e2be88ac9'
            }
        }
        axios.get(`https://api.football-data.org/v2/teams/` + this.props.match.params.id + '/matches?dateFrom=' + this.state.valueFirst, data)
            .then(response => {
                console.log(response);
                this.setState({ matches: response.data.matches });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {

        let data = {
            headers: {
                "X-Auth-Token": '1a8cc8943cb9441d861c456e2be88ac9'
            }
        }

        axios.get(`https://api.football-data.org/v2/teams/` + this.props.match.params.id + '/matches', data)
            .then(response => {
                console.log(response);
                this.setState({ matches: response.data.matches });
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`https://api.football-data.org/v2/teams/` + this.props.match.params.id, data)
            .then(response => {
                console.log(response);
                this.setState({ name: response.data.name });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    matchList() {
        return this.state.matches.map(function (match, i) {
            return <tr>
                <td>{match.utcDate.substring(11, 16)}</td>
                <td>{match.utcDate.substring(0, 10)}</td>
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
                    <form onSubmit={this.handleSubmit}>
                        <input type="date" onChange={this.handleChange1}/>
                        <input type="date" onChange={this.handleChange2}/>
                        <input type="submit" value="Ввести дату"></input>
                    </form>
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