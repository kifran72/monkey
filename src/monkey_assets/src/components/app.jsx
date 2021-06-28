import React from 'react';
import {
    Switch,
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as monkey_idl, canisterId as monkey_id } from 'dfx-generated/monkey';
import Routes from './routing/routes';
import RouteWithSubRoutes from './routing/routeWithSubRoutes';
import { PrivateRoute, UseAuth } from './routing/provideAuth';
import Session from 'react-session-api'

// DEBUT Material
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import InfoIcon from "@material-ui/icons/Info";
import MapIcon from "@material-ui/icons/Map";
import DashboardIcon from '@material-ui/icons/Dashboard';
import Snackbar from '@material-ui/core/Snackbar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';
// FIN Matérial


// Components
import Metamask from "./connect/metamask";
import Dashboard from './home/dashboard';
let options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
}

// Difinity AGENT
const agent = new HttpAgent();
const greeting = Actor.createActor(monkey_idl, { agent: agent, canisterId: monkey_id })

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
    },
    drawerPaper: {
        width: drawerWidth,
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
        backgroundColor: "transparent",
        color: "white",
        marginRight: 10,
    },
    loginButtonMobile: {
        backgroundColor: "transparent",
        color: "black",
        margin: 0,
    },
    logoutButtonMobile: {
        backgroundColor: "transparent",
        color: "black",
        margin: 0,
    },
    logoutButton: {
        backgroundColor: "transparent",
        color: "black",
        margin: 0,
    },
    about: {
        backgroundColor: "transparent",
        color: "white",
    },
    metamask: {},
    idAccount: {
        display: "flex",
        alignItems: "center"
    },
}));

const App = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    let history = useHistory();
    let location = useLocation();
    let auth = UseAuth();
    let user = Session.get("userId") ? Session.get("userId") : null;
    let solde = Session.get("userBalance") ? Session.get("userBalance") : null;
    let alertMetamask = Session.get("metamaskNotInstall") ? Session.get("metamaskNotInstall") : null;
    let { from } = location.state || { from: { pathname: "/" } };
    const [state, setState] = React.useState({
        openAlertMetamask: false,
        verticalMetamask: 'top',
        horizontalMetamask: 'center',

    });

    const handleClick = (newState) => () => {
        setState({ openAlertMetamask: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, openAlertMetamask: false });
    };

    let login = () => {
        auth.signin(() => {
            history.replace(from);
            if (!alertMetamask) {
                handleClick({ verticalMetamask: 'top', horizontalMetamask: 'center' })
            }
        });
    };

    let logout = () => {
        handleMenuClose();
        // Session.clear();
        // setState({ user=null })
        auth.signout(() => history.push("/"));
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const isMenuOpen = Boolean(anchorEl);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

    const menuId = "primary-search-account-menu";
    // RENDU DESKTOP
    const renderMenu = (

        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            backgroundColor='white'
        >
            {user !== null && (
                <MenuItem>
                    <Link to="/Profile">
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Profile
                        </Typography>
                    </Link>
                </MenuItem>
            )}


            {user !== null && (
                <MenuItem>
                    <Link to="/Settings">
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Settings
                        </Typography>
                    </Link>
                </MenuItem>
            )}

            {user !== null && (
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Log Out
                    </Typography>

                </MenuItem>
            )};
        </Menu>

    )

    // RENDU MOBILE
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu =

        (<Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            backgroundColor='white'
            onClose={handleMobileMenuClose}

        >
            {user !== null && (
                <MenuItem>
                    <Link to="/Profile">
                        <ListItemIcon >
                            <PersonIcon />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Profile
                        </Typography>

                    </Link>
                </MenuItem>
            )}

            {user !== null && (
                <MenuItem>
                    <Link to="/Settings">
                        <ListItemIcon >
                            <PersonIcon />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Settings
                        </Typography>

                    </Link>
                </MenuItem>
            )}

            {user !== null && (
                <MenuItem onClick={logout}>

                    <IconButton >
                        <ExitToAppIcon />
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Log Out
                    </Typography>
                </MenuItem>)}
        </Menu>);

    // NAVBAR (TOP)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography className={classes.title} variant="h6" onClick={handleDrawerClose} noWrap>
                        <Link to="/">DEEL</Link>
                    </Typography>

                    <div className={classes.grow} />

                    {/* DESKTOP */}

                    <div className={classes.sectionDesktop}>
                        {user === null && (
                            <Button variant="contained" color="primary" onClick={login}>
                                Connexion
                            </Button>
                        )}

                        {user !== null && (
                            <Typography className={classes.idAccount} variant="h6" onClick={handleDrawerClose} noWrap>

                                {user}
                            </Typography>
                        )}
                        {user !== null && (
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit">

                                <AccountCircle />
                            </IconButton>
                        )}

                    </div>

                    {/* MOBILE */}

                    <div className={classes.sectionMobile}>
                        {user === null && (

                            <IconButton>
                                <Button variant="contained" edge='end' color="primary" onClick={login}>
                                    Connexion
                                </Button>
                            </IconButton>
                        )}

                        {user !== null && (
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit">

                                <AccountCircle />
                            </IconButton>
                        )}

                    </div>
                </Toolbar>
            </AppBar>


            {renderMobileMenu}
            {renderMenu}
            {/* LEFTMENU - DRAWER*/}

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <div className={classes.drawerHeader}>

                    {user !== null &&
                        <h1 className={classes.solde}>{solde} ETH</h1>
                    }

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>



                <List >
                    {user !== null && (
                        <Link to="/Dashboard">
                            <ListItem button onClick={handleDrawerClose}>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                        </Link>)}


                    <Link to="/DeFi">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <MapIcon />
                            </ListItemIcon>
                            <ListItemText primary="DeFi" />
                        </ListItem>
                    </Link>


                    <Link to="/Grow">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <TrendingUpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Grow" />
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List >
                    <Link to="/Market">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Market" />
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List >
                    <Link to="/About">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About DEEL" />
                        </ListItem>
                    </Link>

                    {user !== null && (
                        <Link to="/Settings">
                            <ListItem button onClick={handleDrawerClose}>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                        </Link>)}

                    {user !== null && (
                        <Link to="/Log Out">
                            <ListItem button onClick={handleDrawerClose}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </ListItem>
                        </Link>)}
                </List>
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
                onClick={handleDrawerClose}
            >
                <div className={classes.drawerHeader} />
                {/* <Snackbar
                    anchorOrigin={{ verticalMetamask, horizontalMetamask }}
                    open={openAlertMetamask}
                    onClose={handleClose}
                    message="Please install Metamask first !"
                    key={verticalMetamask + horizontalMetamask}
                /> */}
                <Switch>
                    {Routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <PrivateRoute path="/Dashboard">
                        <Dashboard />
                    </PrivateRoute>
                </Switch>

            </main>
        </div>
    )
}

export default App;


