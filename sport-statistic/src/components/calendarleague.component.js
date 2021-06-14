import "../styles/styles.scss";
import "../styles/nullstyle.css";
import React, { Component } from "react";

export default class CalendarLeague extends Component {
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
                                <option class="inf__season__select__selector__option" value="s1">2019/2020</option>
                                <option value="s2">2017/2018</option>
                            </select>
                        </div>
                    </div>
                    <div class="inf__content">
                        <table class="inf__content__table matches">
                            <tr>
                                <td>16:00</td>
                                <td>25.04</td>
                                <td>Манчестер сити</td>
                                <td>0:1</td>
                                <td>Бавария</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}