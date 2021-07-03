import React, { Component, Fragment } from "react";
import { Helmet } from 'react-helmet'
import { HashLink as Link } from 'react-router-hash-link';
import Grow2 from "./grow2";

// Materials 
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes, faCoins, faDiceD20, faSolarSystem, faGlobe } from '@fortawesome/free-solid-svg-icons'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Link from '@material-ui/core/Link';

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
        height: 'auto',
        width: "100%",

    },
    control: {
        padding: theme.spacing(2),
    },
    panelList: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "2rem",
        gridAutoRows: "minmax(100px, auto)",
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(1, 1fr)"
        },
    },
    titles: {

        width: '100%',
        height: 120,

        color: 'black',
        textAlign: 'center',
    },
    iconPanel: {
        width: '3rem',
        padding: 1
    },
    titlepaper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    insidetext: {
        alignItems: 'center',
        textAlign: 'center',
    },
    discover: {
        textAlign: 'center',
    },
})
class Grow extends Component {
    constructor(props) {
        super(props)
        this.grow = {
            user: null,
            title: '/Grow'
        }
    }
    render() {
        const { classes } = this.props
        return (
            <Fragment >
                <CssBaseline />
                <div className={classes.titles}>
                    <Box component="span" m={1}>
                        <h1> How to grow, the Basics ! </h1>
                        <p> There are differents way to grow your crypto assets. Discover how, in this section !</p>
                    </Box>
                </div>
                <Container fixed>
                    <div className={classes.panelList}>
                        <Paper className={classes.paper}>
                            <div className={classes.titlepaper}>
                                <FontAwesomeIcon className={classes.iconPanel}
                                    icon={faCubes}
                                    size='2x' />
                                <h1>Mining (PoW)</h1>
                            </div>
                            <p className={classes.insidetext}>Miners resolves chain's transactions. This mecanism is called proof of work. This process secures transactions and the blockchain. Miners get paid by transactions fees.</p>
                            <p className={classes.insidetext}><MonetizationOnIcon /> Connect your computation power and earn money.</p>
                            <p className={classes.discover}> Mine with DEEL</p>
                        </Paper>
                        <Paper className={classes.paper} >
                            <div className={classes.titlepaper}>
                                <FontAwesomeIcon className={classes.iconPanel}
                                    icon={faCoins}
                                    size='2x' />
                                <h1>Staking (PoS)</h1>
                            </div>
                            <p className={classes.insidetext}>
                                The staking is a validation mecanism. Funds are locked in your wallet to verify transactions.
                                Contract's conditions, like duration and incomes may vary.
                            </p>
                            <p className={classes.insidetext}><MonetizationOnIcon /> Earn on your locked funds.</p>
                            <p className={classes.discover}> See Staking solutions</p>
                        </Paper>
                    </div>
                </Container>
                <div className={classes.titles}>
                    <Box component="span" m={1}>
                        <h1>Advanced tips !</h1>
                        <p> Here are some advanced techniques to improve your asset revenues.</p>
                    </Box>
                </div>
                <Container fixed>
                    <div className={classes.panelList}>
                        <Paper className={classes.paper}>
                            <div className={classes.titlepaper}>
                                <FontAwesomeIcon className={classes.iconPanel}
                                    icon={faCubes}
                                    size='2x' />
                                <h1>MasterNodes</h1>
                            </div>
                            <p className={classes.insidetext}> A Masternode is a node of networks. It brings and support innovations to the Blochains. You can own a full masternode or a piece of it.</p>
                            <p className={classes.insidetext}> <MonetizationOnIcon />You get commissions on the transactions, in proportion to the use of the node.</p>
                            <p className={classes.discover}> See Masternode solutions</p>
                        </Paper>
                        <Paper className={classes.paper} >
                            <div className={classes.titlepaper}>
                                <FontAwesomeIcon className={classes.iconPanel}
                                    icon={faGlobe}
                                    size='2x' />
                                <h1>Decentralized Finance (DeFi)</h1>
                            </div>
                            <p className={classes.insidetext}> DeFi is one of the most important economical innovation brought by cryptocurrencies. It is a powerful decentralized financial system that requires caution and knowledge</p>
                            <p className={classes.insidetext}>As a one stop solution, we will add the max amount of trustable blockchains and cryptos we can. Ensure that we will sort projects by their potential and goals before we add them.</p>
                            <p className={classes.insidetext}> <MonetizationOnIcon />Get paid on fees as a liquidity provider</p>
                            <p className={classes.discover}> See the DeFi Platform </p>
                        </Paper>
                    </div>
                </Container>
                <div className={classes.titles}>

                    <Box component="span" m={1}>
                        <h1><ArrowDownwardIcon /> More <ArrowDownwardIcon /></h1>
                    </Box>

                </div>
            </Fragment>
        );
    }
}

export default withStyles(useStyles)(Grow);
