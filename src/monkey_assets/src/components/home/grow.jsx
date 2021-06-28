import React, { Component, Fragment } from "react";
import { Helmet } from 'react-helmet'


// Materials 
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
// Components 

import App from "../app";
import Background from '../../../assets/about_backgroundLASTVERSION.gif'

const useStyles = theme => ({

    panel1: {
        display: 'flex'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 270,
        width: "100%",

    },
    control: {
        padding: theme.spacing(2),
    },
    firstPanelList: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "2rem",
        gridAutoRows: "minmax(100px, auto)",
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(1, 1fr)"
        },
    },
    titles: {

        width: '100%',
        height: 120,
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
    },
    iconFirstPanel: {
        width: '3rem',
        margintop: '1rem',
    }
})


class Grow extends Component {
    constructor(props) {
        super(props)
        this.grow = {
            user: null,
            title: 'grow'

        }
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment >
                <CssBaseline />

                <div className={classes.titles}>

                    <Box component="span" m={1}>

                        <h1> The Basics ! </h1>

                    </Box>

                </div>




                <Container fixed>
                    <div className={classes.firstPanelList}>

                        <Paper className={classes.paper}>
                            <DeviceHubIcon className={classes.iconFirstPanel} />
                        </Paper>


                        <Paper className={classes.paper} >

                        </Paper>
                        <Paper className={classes.paper} >

                        </Paper>
                    </div>
                </Container>

                <div className={classes.titles}>

                    <Box component="span" m={1}>
                        <h1>
                            Advanced tips !
                        </h1>
                    </Box></div>
            </Fragment>


        );
    }
}

export default withStyles(useStyles)(Grow);
