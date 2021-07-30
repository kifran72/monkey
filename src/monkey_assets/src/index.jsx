import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { ProvideAuth } from "./components/routing/provideAuth";
import App from "./components/app";

render(
    <ProvideAuth>
        <Router>
            <App />
        </Router>
    </ProvideAuth>
    , document.getElementById("app"));