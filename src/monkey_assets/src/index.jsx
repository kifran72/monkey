import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, } from "react-router-dom";
import { ProvideAuth } from "./components/routing/provideAuth";
import "./main.css";
import App from "./components/app";

ReactDOM.render(
    <ProvideAuth>
        <Router>
            <App />
        </Router>
    </ProvideAuth>
    , document.getElementById("app"));