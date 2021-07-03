import React from 'react';
import {
    Switch,
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import Session from 'react-session-api';

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

const DrawerDefault = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const open = props.open;
    const handleDrawerClose = props.handleDrawerClose;
    let user = Session.get("userId") ? Session.get("userId") : null;
    let solde = Session.get("userBalance") ? Session.get("userBalance") : null;
    const logout = props.logout;
    return (
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

                    <ListItem button onClick={handleDrawerClose, logout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItem>
                )}
            </List>
        </Drawer>
    )
}

export default DrawerDefault;