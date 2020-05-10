import React from 'react';
import { AppBar,makeStyles,createStyles } from '@material-ui/core';


const NavigationBar = () => {
     const classes = useStyles();
     return(
        <AppBar title="Baby Land" color='primary'>
            hey there Navbar
        </AppBar>
     )
}

 const useStyles = makeStyles(theme => 
     createStyles({
 }))


export default NavigationBar;