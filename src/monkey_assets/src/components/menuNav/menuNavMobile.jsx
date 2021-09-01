import React from 'react';
import Session from 'react-session-api';
import { Link } from "react-router-dom";

// DEBUT Material
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
// FIN Matérial


const MenuNavMobile = (props) => {
    let user = Session.get("userId") ? Session.get("userId") : null;
    const mobileMenuId = "primary-search-account-menu-mobile";
    const mobileMoreAnchorEl = props.mobileMoreAnchorEl
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = props.handleMobileMenuClose;
    const logout = props.logout;

    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            backgroundcolor='white'
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

            {/* {user !== null && (
                <MenuItem onClick={logout}>

                    <IconButton >
                        <ExitToAppIcon />
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Log Out
                    </Typography>
                </MenuItem>)} */}
        </Menu>
    )
}

export default MenuNavMobile;