import React from 'react'
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// This component is responsible for showing the login and logout buttons

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <Button variant="contained" color="primary" onClick={() => loginWithRedirect({})}>Log in</Button>
            )}

            {isAuthenticated && <Button variant="contained" color="primary" onClick={() => logout()}>Log out</Button>}
        
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/profile">Profile</Link>
                    <Link to="/play">Pelaa</Link>
                </span>
    )}
        
        
        
        </div>
    );
};

export default NavBar;