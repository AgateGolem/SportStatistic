import "../styles/styles.scss";
import "../styles/nullstyle.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Leagues extends Component {

    constructor(props) {
        super(props);
        this.state = { competitions:[]}
    }

    componentDidMount() {
        //
        let data = {
            headers: {
                "X-Auth-Token": '1a8cc8943cb9441d861c456e2be88ac9'
            }
        }

        axios.get(`https://api.football-data.org/v2/competitions`, data)
            .then(response => {
                console.log(response);
                this.setState({ competitions:response.data.competitions });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    leaguesList() {
        return this.state.competitions.map(function (competition, i) {
            return <li>
                <div class="inf__league">
                <div class="league__name">
                    {competition.name}
                </div>
                <div>
                    <div class="transition">
                            <Link to={"/comands/" + competition.id}><svg width="25" height="23" viewBox="0 0 77 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.511 11.2961C27.511 8.30022 28.6688 5.427 30.7296 3.30856C32.7905 1.19013 35.5856 0 38.5 0C41.4145 0 44.2096 1.19013 46.2704 3.30856C48.3312 5.427 49.489 8.30022 49.489 11.2961C49.489 14.2921 48.3312 17.1653 46.2704 19.2837C44.2096 21.4022 41.4145 22.5923 38.5 22.5923C35.5856 22.5923 32.7905 21.4022 30.7296 19.2837C28.6688 17.1653 27.511 14.2921 27.511 11.2961ZM38.5 5.65373C37.7792 5.65373 37.0654 5.79967 36.3995 6.08323C35.7335 6.36679 35.1284 6.78241 34.6187 7.30635C34.109 7.8303 33.7047 8.45232 33.4289 9.13689C33.153 9.82146 33.011 10.5552 33.011 11.2961C33.011 12.0371 33.153 12.7708 33.4289 13.4554C33.7047 14.14 34.109 14.762 34.6187 15.2859C35.1284 15.8099 35.7335 16.2255 36.3995 16.5091C37.0654 16.7926 37.7792 16.9386 38.5 16.9386C39.9558 16.9386 41.3519 16.3441 42.3813 15.2859C43.4107 14.2278 43.989 12.7926 43.989 11.2961C43.989 9.79968 43.4107 8.36451 42.3813 7.30635C41.3519 6.24819 39.9558 5.65373 38.5 5.65373Z" fill="black" />
                                <path d="M54.9999 14.1229C54.9999 13.0093 55.2133 11.9065 55.6279 10.8776C56.0425 9.84864 56.6502 8.91375 57.4162 8.12626C58.1823 7.33876 59.0918 6.71408 60.0927 6.28789C61.0937 5.86171 62.1665 5.64235 63.2499 5.64235C64.3333 5.64235 65.4061 5.86171 66.407 6.28789C67.4079 6.71408 68.3174 7.33876 69.0835 8.12626C69.8496 8.91375 70.4573 9.84864 70.8719 10.8776C71.2865 11.9065 71.4998 13.0093 71.4998 14.1229C71.4998 16.3721 70.6307 18.5292 69.0835 20.1196C67.5363 21.71 65.4379 22.6035 63.2499

                                    22.6035C61.0618 22.6035 58.9634 21.71 57.4162 20.1196C55.8691 18.5292 54.9999 16.3721 54.9999 14.1229ZM63.2499 11.2961C62.5205 11.2961 61.821 11.5939 61.3053 12.124C60.7896 12.6542 60.4999 13.3732 60.4999 14.1229C60.4999 14.8727 60.7896 15.5917 61.3053 16.1218C61.821 16.652 62.5205 16.9498 63.2499 16.9498C63.9792 16.9498 64.6787 16.652 65.1944 16.1218C65.7101 15.5917 65.9999 14.8727 65.9999 14.1229C65.9999 13.3732 65.7101 12.6542 65.1944 12.124C64.6787 11.5939 63.9792 11.2961 63.2499 11.2961Z" fill="black" />
                                <path d="M13.75 5.64235C11.562 5.64235 9.46354 6.53584 7.91636 8.12626C6.36919 9.71668 5.5 11.8737 5.5 14.1229C5.5 16.3721 6.36919 18.5292 7.91636 20.1196C9.46354 21.71 11.562 22.6035 13.75 22.6035C15.938 22.6035 18.0364 21.71 19.5836 20.1196C21.1308 18.5292 22 16.3721 22 14.1229C22 11.8737 21.1308 9.71668 19.5836 8.12626C18.0364 6.53584 15.938 5.64235 13.75 5.64235ZM11 14.1229C11 13.3732 11.2897 12.6542 11.8054 12.124C12.3212 11.5939 13.0206 11.2961 13.75 11.2961C14.4793 11.2961 15.1788 11.5939 15.6945 12.124C16.2102 12.6542 16.5 13.3732 16.5 14.1229C16.5 14.8727 16.2102 15.5917 15.6945 16.1218C15.1788 16.652 14.4793 16.9498 13.75 16.9498C13.0206 16.9498 12.3212 16.652 11.8054 16.1218C11.2897 15.5917 11 14.8727 11 14.1229Z" fill="black" />
                                <path d="M17.974 28.2572C17.006 29.9751 16.4975 31.9257 16.5 33.911H5.49999V48.0453C5.49955 49.4516 5.83931 50.8359 6.48871 52.0737C7.1381 53.3114 8.07674 54.3637 9.22012 55.1359C10.3635 55.9081 11.6757 56.3758 13.0387 56.4971C14.4016 56.6183 15.7725 56.3892 17.028 55.8305C17.435 57.7019 18.073 59.4884 18.898 61.1563C16.8105 62.0227 14.5481 62.349 12.3093 62.1065C10.0705 61.864 7.92388 61.0602 6.05792 59.7657C4.19196 58.4711 2.66375 56.7254 1.6075 54.6818C0.551242 52.6383 -0.000748262 50.3594 7.61271e-07 48.0453V33.911C7.61271e-07 32.4115 0.579462 30.9735 1.61091 29.9132C2.64236 28.8529 4.0413 28.2572 5.49999 28.2572H17.974Z" fill="black" />
                                <path d="M58.1021 61.1563C60.1895 62.0227 62.4519 62.349 64.6907 62.1065C66.9295 61.864 69.0761 61.0602 70.9421 59.7657C72.8081 58.4711 74.3363 56.7254 75.3925 54.6818C76.4488 52.6383 77.0008 50.3594 77 48.0453V33.911C77 32.4115 76.4206 30.9735 75.3891 29.9132C74.3577 28.8529 72.9587 28.2572 71.5 28.2572H59.0261C59.961 29.9194 60.5 31.8474 60.5 33.911H71.5V48.0453C71.5005 49.4516 71.1607 50.8359 70.5113 52.0737C69.8619 53.3114 68.9233 54.3637 67.7799 55.1359C66.6365 55.9081 65.3243 56.3758 63.9613 56.4971C62.5984 56.6183 61.2275 56.3892 59.972 55.8305C59.5595 57.7019 58.927 59.4884 58.1021 61.1563Z" fill="black" />
                                <path d="M27.4999 28.2572C26.0412 28.2572 24.6423 28.8529 23.6108 29.9132C22.5794 30.9735 21.9999 32.4115 21.9999 33.911V50.8722C21.9999 55.3705 23.7383 59.6847 26.8327 62.8655C29.927 66.0464 34.1238 67.8333 38.4999 67.8333C42.876 67.8333 47.0728 66.0464 50.1672 62.8655C53.2615 59.6847 54.9999 55.3705 54.9999 50.8722V33.911C54.9999 32.4115 54.4204 30.9735 53.389 29.9132C52.3575 28.8529 50.9586 28.2572 49.4999 28.2572H27.4999ZM27.4999 33.911H49.4999V50.8722C49.4999 53.8711 48.341 56.7472 46.2781 58.8677C44.2152 60.9883 41.4173 62.1796 38.4999 62.1796C35.5825 62.1796 32.7846 60.9883 30.7217 58.8677C28.6589 56.7472 27.4999 53.8711 27.4999 50.8722V33.911Z" fill="black" />
                            </svg></Link>
                    </div>
                    <div class="transition">
                        <Link to={"/calendarleague/" + competition.id}><svg width="25" height="25" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
            </div>
            </li>
        });
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
                        Список лиг
                    </div>
                    <ul>
                        {this.leaguesList()}
                    </ul>
                </div>
            </div>
        );
    }
}