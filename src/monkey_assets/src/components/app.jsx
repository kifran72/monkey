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
// FIN Matérial

// Components
import Metamask from "./connect/metamask";
import Dashboard from './home/dashboard';

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
    about: {
        backgroundColor: "transparent",
        color: "white",
    },
    metamask: {},
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
    let user = Session.get("user") ? Session.get("user") : null;
    let { from } = location.state || { from: { pathname: "/" } };

    let login = () => {
        auth.signin(() => {
            history.replace(from);
        });

    };

    let logout = () => {
        handleMenuClose();
        Session.clear();
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
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profil</MenuItem>
            <MenuItem onClick={handleMenuClose}>Paramètres</MenuItem>
            <MenuItem onClick={logout}>Déconnexion</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {user !== null && (
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
            )}
            {user !== null && (
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profil</p>
                </MenuItem>
            )}

            {user !== null && (
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
            )}

            {user === null && (
                <MenuItem>
                    <Button
                        variant="text"
                        color="inherit"
                        className={classes.loginButtonMobile}
                        fullWidth={true}
                        onClick={Metamask}
                    >
                        Connexion
                    </Button>
                </MenuItem>
            )}
            {user === null && (
                <MenuItem>
                    <Button variant="contained" color="primary">
                        S'inscrire
                    </Button>
                </MenuItem>
            )}
        </Menu>
    );
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
                    <div className={classes.sectionDesktop}>
                        {user !== null && (
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        )}
                        {user === null && (
                            <Button
                                variant="text"
                                className={classes.loginButton}
                                color="default"
                                onClick={login}
                            >
                                Connexion
                            </Button>
                        )}
                        {user === null && (
                            <Button variant="contained" color="primary">
                                S'inscrire
                            </Button>
                        )}
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}

            {/* LEFTMENU */}
            {renderMenu}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <div className={classes.drawerHeader}>

                    {/* <h1 className={classes.solde}></h1> */}

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>

                <Divider />

                <List>

                    <Link to="/About">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                        </ListItem>
                    </Link>
                    <Link to="/RoadMap">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <MapIcon />
                            </ListItemIcon>
                            <ListItemText primary="RoadMap" />
                        </ListItem>
                    </Link>

                    <Link to="/Market">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Market" />
                        </ListItem>
                    </Link>

                    <Link to="/Products">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <ShoppingBasketIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItem>
                    </Link>

                </List>

                <Divider />

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
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
            </main>
        </div>
    )
}

export default App;


