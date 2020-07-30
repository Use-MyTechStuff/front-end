import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink,  useHistory } from "react-router-dom";
import { logout } from "../actions/";


import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

//import { useStyles } from "../theme/theme"

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    nav: {
      background: "#008080",
      color: "#A9A9A9"
    },
    menu: {
      color: "black",
      textDecoration: "none"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      marginLeft: '15%',
      fontFamily: ('Gaegu', 'cursive'),
      fontSize: '40'
    },
    avatar: {
      flexGrow : 1,
      marginLeft: '50%'
    }

  }));

const NavBar = ({ logout,  user_id }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const {push} = useHistory();
  
    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      setAnchorEl(null);
      logout();
      push('/');
    };
  
    return (
      <div className={classes.root}>
        <AppBar className={classes.nav} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Use My Tech
            </Typography>
            
              <div className={classes.avatar}>
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
                      Dashboard
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink className={classes.menu} to="/browse-rentals">
                      Browse Rentals 
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  const mapStateToProps = state => {
    console.log(state)
    return {
      auth: state.auth,
      user_id: state.user
    };
  };
  
  export default connect(mapStateToProps, { logout })(NavBar);