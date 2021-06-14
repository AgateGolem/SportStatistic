import "../styles/styles.scss";
import "../styles/nullstyle.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export default class Comands extends Component {

    constructor(props) {
        super(props);
        this.state = { teams: [], seasons: [], value: "", name: "" }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let data = {
            headers: {
                "X-Auth-Token": '1a8cc8943cb9441d861c456e2be88ac9'
            }
        }
        this.setState({ value: event.target.value });
        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id + '/teams?season=' + this.state.value.substring(0, 4), data)
            .then(response => {
                console.log(response);
                this.setState({ teams: response.data.teams });
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

        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id + '/teams', data)
            .then(response => {
                console.log(response);
                this.setState({ teams: response.data.teams });
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`https://api.football-data.org/v2/competitions/` + this.props.match.params.id, data)
            .then(response => {
                console.log(response);
                this.setState({  seasons: response.data.seasons, name: response.data.name });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    comandsList(){
        return this.state.teams.map(function(team, i){
            return <tr>
                <td>{team.name}
                    <div class="transition">
                        <Link to={"/calendarcomand/" + team.id}><svg width="25" height="25" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M68.2188 13.875H55.5V5.78125H50.875V13.875H23.125V5.78125H18.5V13.875H5.78125C4.86161 13.8761 3.97994 14.2419 3.32966 14.8922C2.67937 15.5424 2.31357 16.4241 2.3125 17.3438V65.9062C2.31357 66.8259 2.67937 67.7076 3.32966 68.3578C3.97994 69.0081 4.86161 69.3739 5.78125 69.375H68.2188C69.1384 69.3739 70.0201 69.0081 70.6703 68.3578C71.3206 67.7076 71.6864 66.8259 71.6875 65.9062V17.3438C71.6864 16.4241 71.3206 15.5424 70.6703 14.8922C70.0201 14.2419 69.1384 13.8761 68.2188 13.875ZM67.0625 64.75H6.9375V18.5H18.5V24.2812H23.125V18.5H50.875V24.2812H55.5V18.5H67.0625V64.75Z" fill="black" />
                            <path d="M16.1875 32.375H20.8125V37H16.1875V32.375Z" fill="black" />
                            <path d="M28.9062 32.375H33.5312V37H28.9062V32.375Z" fill="black" />
                            <path d="M40.4688 32.375H45.0938V37H40.4688V32.375Z" fill="black" />
                            <path d="M53.1875 32.375H57.8125V37H53.1875V32.375Z" fill="black" />
                            <path d="M16.1875 42.7812H20.8125V47.4062H16.1875V42.7812Z" fill="black" />
                            <path d="M28.9062 42.7812H33.5312V47.4062H28.9062V42.7812Z" fill="black" />
                            <path d="M40.4688 42.7812H45.0938V47.4062H40.4688V42.7812Z" fill="black" />
                            <path d="M53.1875 42.7812H57.8125V47.4062H53.1875V42.7812Z" fill="black" />
                            <path d="M16.1875 53.1875H20.8125V57.8125H16.1875V53.1875Z" fill="black" />
                            <path d="M28.9062 53.1875H33.5312V57.8125H28.9062V53.1875Z" fill="black" />
                            <path d="M40.4688 53.1875H45.0938V57.8125H40.4688V53.1875Z" fill="black" />
                            <path d="M53.1875 53.1875H57.8125V57.8125H53.1875V53.1875Z" fill="black" />
                        </svg></Link>
                    </div>
                </td>
                
            </tr>
        });
    }

    seasonsList(){
        return this.state.seasons.map(function(season, i){
            return <option value={season.startDate}>
                {season.startDate}/{season.endDate}
            </option>
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
                        <table class="inf__content__table teams">
                        <thead>
                            <tr><th>Команды</th></tr>
                        </thead>
                            <tbody>
                                {this.comandsList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
