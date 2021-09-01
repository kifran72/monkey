import React from 'react';
import Session from 'react-session-api';
import { Link } from "react-router-dom";

// DEBUT Material
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
// FIN Matérial

const MenuNavDefault = (props) => {
    let user = Session.get("userId") ? Session.get("userId") : null;
    const menuId = "primary-search-account-menu";
    const anchorEl = props.anchorEl
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = props.handleMenuClose;
    const logout = props.logout;

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            backgroundcolor='white'
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

            {/* {user !== null && (
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Log Out
                    </Typography>

                </MenuItem>
            )} */}
        </Menu>
    )
}

export default MenuNavDefault;