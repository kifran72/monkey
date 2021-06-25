import React from "react";
import { Helmet } from 'react-helmet'

// Material
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

// Components
import NavbarNotConnected from "../navbar/navbarNotConnected";
import ContentNotLogged from "../contentNotLogged";

const TITLE = 'DashBoard';

const Dashboard = () => {
    let user = "toto";

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h1>Dashboard</h1>
        </>
    );
};

export default Dashboard;
