import React from "react";
import { Helmet } from 'react-helmet';
import ApexCharts from 'apexcharts';

// Material
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';

// Components
import NavbarNotConnected from "../navbar/navbarNotConnected";
import ContentNotLogged from "../contentNotLogged";

const TITLE = 'DashBoard';

const DashBoard = () => {
    let user = "toto";

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h1>Dashboard</h1>
            <div id="chart"></div>
        </>
    );
};

export default DashBoard;
