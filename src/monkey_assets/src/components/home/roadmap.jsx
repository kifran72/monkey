import React from "react";
import { Helmet } from 'react-helmet'

// Material
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

// Components
import NavbarNotConnected from "../navbar/navbarNotConnected";
import ContentNotLogged from "../contentNotLogged";

const TITLE = 'RoadMap';


const RoadMap = () => {
    let user = "toto";

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h1>RoadMap</h1>
        </>
    );
};

export default RoadMap;
