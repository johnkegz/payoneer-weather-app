import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: '1.25rem',
        width: '100%'
     },
     
  });

function LoadingScreen() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            loading....
        </div>
    )
}

export default LoadingScreen;

