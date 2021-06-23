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

const TITLE = 'About';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "space-between",
    },
}));

const About = () => {
    let user = "toto";
    const [open] = React.useState(false);
    const classes = useStyles();

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className={classes.root}>
                <NavbarNotConnected />
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    {/* Component a Afficher ou HTML */}
                    <h1>Discover the ecosystem !</h1>
                    {/* <img src={BackgroundAbout} alt="" /> */}



                </main>
            </div>
        </>



    );
};

export default About;
