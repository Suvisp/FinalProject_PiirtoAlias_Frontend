import React, { Component } from 'react'
import { useAuth0 } from '../react-auth0-spa';
import { Link, Redirect } from 'react-router-dom';
import ParentBox from './ParentBox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 275,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Landing = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    if (!isAuthenticated) {
        return ( 
            <div className="tausta">
                    <Card className={classes.root}>
                        <CardContent>
                            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography> */}
                            <Typography variant="h5" component="h2">
                            Tervetuloa pelaamaan piirtoAliasta! :D
                            </Typography>
                            {/* <Typography className={classes.pos} color="textSecondary">
                            adjective
                            </Typography> */}
                            <Typography variant="body2" component="p">
                            Tunnistaudu ja aloita pelaaminen
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button variant="contained" color="primary" onClick={() => loginWithRedirect({})}>
                            Aloita peli
                        </Button>
                            {/* <button onClick={() => loginWithRedirect({})}>Aloita peli</button> */}
                        </CardActions>
                        </Card>
            </div>)
    } else 
    return <Redirect to='/play' component={ParentBox} />;
};

export default Landing;
