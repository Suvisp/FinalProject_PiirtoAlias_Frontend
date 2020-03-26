import React, { Component } from 'react'
import ArvattavaSana from './ArvattavaSana'
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';
import ParentBox from './ParentBox';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

//This component is responsible for showing the login and logout buttons
const useStyles = makeStyles(theme => ({
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

const NavBar = () => {
    const classes = useStyles();
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = event => {
        loginWithRedirect(event.target.checked);
      };
    
      const handleMenu = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const logOut = () => {
        logout();
      }
    
  
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="subtitle2" className={classes.title}>
                    <p>Piirrä: </p>
                    <ArvattavaSana />
                </Typography>
                    {isAuthenticated && (
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
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                        <MenuItem onClick={logOut}>Log out</MenuItem>
                    </Menu>
                    </div>
             )}
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default NavBar;