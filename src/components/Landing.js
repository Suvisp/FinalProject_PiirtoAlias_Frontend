import React, { Component } from 'react'
import { useAuth0 } from '../react-auth0-spa';
import { Link, Redirect } from 'react-router-dom';
import ParentBox from './ParentBox';
import '../App.css'

// const useStyles ={
//     background: {
//       width: 100,
//       backgroundColor: 
//     }
//   };

const Landing = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    if (!isAuthenticated) {
        return ( 
            <div className="tausta">
                <div>
                    <h1>Tämä on piirtoAlias!</h1>
                    <h4>tunnistaudu ja aloita peli</h4> 
                    <button onClick={() => loginWithRedirect({})}>Aloita peli</button>
                </div>
            </div>)
    } else 
    return <Redirect to='/play' component={ParentBox} />;
};

export default Landing;
