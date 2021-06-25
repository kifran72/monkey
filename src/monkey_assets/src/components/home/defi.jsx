import React from "react";
import { Helmet } from 'react-helmet'

// Material
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

// Components
import NavbarNotConnected from "../navbar/navbarNotConnected";
import ContentNotLogged from "../contentNotLogged";
import Image from 'react-bootstrap/Image'
import BackgroundAbout from "../../assets/about_background.gif";
import ContainerDimensions from 'react-container-dimensions'

const TITLE = 'DeFi';

const DeFi = () => {
    let user = "toto";

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h1> DeFi Project</h1>
        </>
    );
};

export default DeFi;
