import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as monkey_idl, canisterId as monkey_id } from 'dfx-generated/monkey';
const agent = new HttpAgent();
const greeting = Actor.createActor(monkey_idl, { agent: agent, canisterId: monkey_id })
// Components
import Home from '../home/home';
import About from '../home/about';

const App = () => {
    let user = null;
    return (
        <div>
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </Router>
        </div>
    )
}

export default App;