import React from "react";
import "./Nav.css";

const Nav = props => (
        <nav>
            <ul>
                <li className="brand animated lightSpeedIn">
                a href="/clicky-game/">{props.title}</li>
                <li id="win-lose">{props.winLose}</li>
                <li id="current">Current Score: {props.score}</li>
                <li id="top">Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );

    export default Nav;