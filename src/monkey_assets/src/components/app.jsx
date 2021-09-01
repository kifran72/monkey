import React from 'react';
import {
    Switch,
    useHistory,
    useLocation
} from "react-router-dom";

import { monkey } from "../../../declarations/monkey";



import Routes from './routing/routes';
import RouteWithSubRoutes from './routing/routeWithSubRoutes';
import { PrivateRoute, UseAuth } from './routing/provideAuth';
import Session from 'react-session-api'

// DEBUT Material
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Slide from '@material-ui/core/Slide';
// FIN Matérial


// Components
import Dashboard from './home/dashboard';
import NavbarDefault from './navbar/navbarDefault';
import DrawerDefault from './drawer/drawerDefault';
import MenuNavDefault from './menuNav/menuNavDefault';
import MenuNavMobile from './menuNav/menuNavMobile';
import SnackbarDefault from './snackbar/snackbarLogin';
import BinanceService from './services/binance';

let mesCouilles = new BinanceService();
mesCouilles.showData();

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {

        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        [theme.breakpoints.down("sm")]: {
            flexShrink: "unset",
            width: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    solde: {
        marginLeft: 8,
    },
    title: {
        fontSize: 20,
    },
    loginButton: {
        backgroundcolor: "transparent",
        color: "white",
        marginRight: 10,
    },
    loginButtonMobile: {
        backgroundcolor: "transparent",
        color: "black",
        margin: 0,
    },
    logoutButtonMobile: {
        backgroundcolor: "transparent",
        color: "black",
        margin: 0,
    },
    logoutButton: {
        backgroundcolor: "transparent",
        color: "black",
        margin: 0,
    },
    about: {
        backgroundcolor: "transparent",
        color: "white",
    },
    metamask: {},
    idAccount: {
        display: "flex",
        alignItems: "center"
    },
}));

const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
}

const test = async () => {
    let test = await monkey.greet('test');
    if (test) {
        console.log(monkey);
        console.log(test);
    }
}

const App = () => {
    test();
    const user = Session.get("userId") ? Session.get("userId") : null;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    let history = useHistory();
    let location = useLocation();
    let auth = UseAuth();
    let alertMetamask = Session.get("metamaskNotInstall") ? Session.get("metamaskNotInstall") : null;
    let { from } = location.state || { from: { pathname: "/" } };
    const [state, setState] = React.useState({
        openAlertMetamask: false,
        verticalMetamask: 'top',
        horizontalMetamask: 'center',
    });
    const [openSnack, setOpenSnack] = React.useState(false);
    const [transitionSnack, setTransitionSnack] = React.useState(undefined);
    let contentSnack = user !== null ? 'Bienvenue !' : 'Choisissez un compte';

    const handleClickSnack = (Transition) => () => {
        setTransitionSnack(() => Transition);
        setOpenSnack(true);
    };

    const handleCloseSnack = () => {
        setOpenSnack(false);
    };

    const handleClick = (newState) => () => {
        setState({ openAlertMetamask: true, ...newState });
    };

    const login = () => {
        auth.signin(() => {
            history.replace(from);
            if (!alertMetamask) {
                handleClick({ verticalMetamask: 'top', horizontalMetamask: 'center' });
                setTransitionSnack(() => TransitionUp);
                setOpenSnack(true);
            }
        });
    };

    const logout = () => {
        handleMenuClose();
        handleDrawerClose();
        auth.signout(() => history.push("/"));
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    if (user !== null) { handleClickSnack(TransitionUp); }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* NAVBAR (TOP) */}
            <NavbarDefault login={login} open={open} handleDrawerOpen={handleDrawerOpen} handleMobileMenuOpen={handleMobileMenuOpen} handleProfileMenuOpen={handleProfileMenuOpen} handleMenuClose={handleMenuClose} handleClickSnack={handleClickSnack(TransitionUp)} />
            <MenuNavMobile logout={logout} mobileMoreAnchorEl={mobileMoreAnchorEl} handleMobileMenuClose={handleMobileMenuClose} />
            <MenuNavDefault logout={logout} anchorEl={anchorEl} handleMenuClose={handleMenuClose} />
            {/* LEFTMENU - DRAWER*/}
            <DrawerDefault open={open} handleDrawerClose={handleDrawerClose} logout={logout} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
                onClick={handleDrawerClose}
            >
                <div className={classes.drawerHeader} />

                <Switch>
                    {Routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <PrivateRoute path="/Dashboard">
                        <Dashboard />
                    </PrivateRoute>
                </Switch>
                <SnackbarDefault content={contentSnack} openSnack={openSnack} transitionSnack={transitionSnack} handleCloseSnack={handleCloseSnack} />
            </main>
        </div>
    )
}

export default App;


