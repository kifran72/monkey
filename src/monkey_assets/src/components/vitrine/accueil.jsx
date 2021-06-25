import React from 'react';
import { Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Routes from '../routing/routes';
import RouteWithSubRoutes from '../routing/routeWithSubRoutes';
import { Helmet } from 'react-helmet'

const TITLE = 'Content Not Logged';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Accueil = () => {
    const classes = useStyles();

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div>
                <h1>Accueil</h1>

            </div>
        </>
    )
}

export default Accueil;