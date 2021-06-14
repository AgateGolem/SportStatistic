import "../styles/styles.scss";
import "../styles/nullstyle.css";
import React, { Component } from "react";
import axios from 'axios';

export default class Comands extends Component {
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
                        Команды УЕФА
                    </div>
                    <div class="inf__season">
                        <div class="inf__season__seasonText">Сезон</div>
                        <div class="inf__season__select">
                            <select class="inf__season__select__selector">
                                <option value="s1">2019/2020</option>
                                <option value="s2">2017/2018</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="inf__content">
                        <table class="inf__content__table teams">
                            <tr><td>Команды</td>
                            <td>
                                <div class="teams__container">
                                    <div class="teams__container__count">И</div>
                                    <div class="teams__container__count">В</div>
                                    <div class="teams__container__count">Н</div>
                                    <div class="teams__container__count">П</div>
                                </div>
                            </td>
                            <td>Очки</td></tr>
                            <tr><td>Зенит</td>
                                <td>
                                    <div class="teams__container">
                                        <div class="teams__container__count">5</div>
                                        <div class="teams__container__count">3</div>
                                        <div class="teams__container__count">0</div>
                                        <div class="teams__container__count">2</div>
                                    </div>
                                </td>
                                <td>12</td></tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
