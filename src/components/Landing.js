import React, { Component } from 'react'
import { useAuth0 } from '../react-auth0-spa';
import { Link, Redirect } from 'react-router-dom';
import ParentBox from './ParentBox';


const Landing = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    if (!isAuthenticated) {
        return ( 
            <div>
                <h1>Tämä on piirtoAlias!</h1>
                <h4>tunnistaudu ja aloita peli</h4> 
                <button onClick={() => loginWithRedirect({})}>Aloita peli</button>
            </div>)
    } else 
    return <Redirect to='/play'  component={ParentBox} />;
};

export default Landing;
