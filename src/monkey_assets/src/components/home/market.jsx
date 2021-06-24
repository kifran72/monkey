import React from "react";
import { Helmet } from 'react-helmet'

// Material
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

// Components
import NavbarNotConnected from "../navbar/navbarNotConnected";
import ContentNotLogged from "../contentNotLogged";

const TITLE = 'Market';

const Market = () => {
    let user = "toto";


    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h1>Market</h1>
        </>
    );
};

export default Market;
