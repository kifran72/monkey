import React from "react";
import { Link } from "react-router-dom";
import { PrivateRoute, UseAuth } from '../routing/provideAuth';
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
// FIN Matérial

// Components
import Metamask from "../connect/metamask";

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
    justifyContent: "space-between",
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

const NavbarDefault = (props) => {
  let user = Session.get("userId") ? Session.get("userId") : null;
  const classes = useStyles();
  const open = props.open;
  const login = props.login;
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const handleDrawerOpen = props.handleDrawerOpen;
  const handleDrawerClose = props.handleDrawerClose;
  const handleProfileMenuOpen = props.handleProfileMenuOpen;

  return (
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
  );
};

export default NavbarDefault;
