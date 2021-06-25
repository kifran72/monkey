import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import Routes from "../routing/routes";
import RouteWithSubRoutes from '../routing/routeWithSubRoutes';
import Hello from './start';
import Button from "@material-ui/core/Button";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

    }
    showMore = () => {
        this.state.show = true;
        console.log(this.state)
    }
    render() {
        return (
            <section>
                <h1>Le passage de Lorem Ipsum standard, utilisé depuis 1500</h1>
                <Button onClick={this.showMore}>Start</Button>
                <Hello />
                {this.state.show === true &&
                    <Hello />
                }

            </section>
        );
    }
}

export default Welcome;