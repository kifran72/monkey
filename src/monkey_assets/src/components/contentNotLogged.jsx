import React from 'react';
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from './routing/routeWithSubRoutes';
import { Helmet } from 'react-helmet'

const TITLE = 'Content Not Logged';

function ContentNotLogged({ routes }) {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div>
                <h1>Not logged</h1>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </>
    )
}

export default ContentNotLogged;