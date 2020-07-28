import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { logout } from "../actions/";


import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { useStyles } from "../theme/theme"

const NavBar = ({ logout, auth }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { user_id } = useParams();
  
    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      setAnchorEl(null);
      logout();
    };
  
    return (
      <div className={classes.root}>
        <AppBar className={classes.nav} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Use My Tech
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      className={classes.menu}
                      to={`/user-page/${user_id}`}
                    >
                      Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink className={classes.menu} to="/all-tech">
                      All Tech
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };
  
  export default connect(mapStateToProps, { logout })(NavBar);