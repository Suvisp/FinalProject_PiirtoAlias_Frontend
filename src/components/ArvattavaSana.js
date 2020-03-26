import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
  }));

const ArvattavaSana = props => {
    const classes = useStyles();

        return (
            <Typography variant="h6" className={classes.title}>
                <p>{props.sana2}</p>
            </Typography>
        )
    
}
export default ArvattavaSana;
