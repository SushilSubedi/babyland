import React from 'react';
import {Box,makeStyles, createStyles,Typography,Button,AppBar } from '@material-ui/core';

const NavigationBar = (props) =>{
    const classes = useStyles();
return(
    <div>
      <AppBar position="fixed" color="primary" elevation={0}>
        <div className={classes.navBar}>
          <div>
            <Typography variant="h6" className={classes.title}>
              BabyLand
            </Typography>
          </div>
          <div style={{display:'flex'}}>
            <Button color="inherit" classes={{text:classes.text}}>Home</Button>
            <Button color="inherit" classes={{text:classes.text}}>Search</Button>
            <Button color="inherit" classes={{text:classes.text}}>Explore</Button>
            <Button color="inherit"classes={{text:classes.text}}>Login/Signup</Button>
          </div>
        </div>
      </AppBar>
  </div>
)
}

const useStyles = makeStyles(
    createStyles({
        navBar: {
            display: "flex",
            height: "54px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0% 8%"
        },
        text:{
            padding:'6px 11px',
            textTransform:'initial',
            fontSize:'16px'
        },

    })
)

export default NavigationBar;