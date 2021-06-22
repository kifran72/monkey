import React from 'react';
import {
    HashRouter as Router,
    Switch
} from "react-router-dom";
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as monkey_idl, canisterId as monkey_id } from 'dfx-generated/monkey';
import Routes from '../routing/routes';
import RouteWithSubRoutes from '../routing/routeWithSubRoutes';

//Components
import Home from '../home/home';

// Difinity AGENT
const agent = new HttpAgent();
const greeting = Actor.createActor(monkey_idl, { agent: agent, canisterId: monkey_id })

const App = () => {
    let user = null;
    return (
        <Router>
            <Switch>
                {Routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    )
}

export default App;