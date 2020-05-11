import React from 'react';
import {makeStyles, createStyles,Typography,Button,AppBar,Toolbar } from '@material-ui/core';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const NavigationBar = () =>{
    const classes = useStyles();
return(
      <AppBar position="fixed" color="primary" elevation={0}>
        <div className={classes.navBar}>
          <Toolbar>
           <Link to={'/'}><img src={logo} alt="logo" className={classes.logo} /></Link>
          </Toolbar>
          <div style={{display:'flex'}}>
           <Link to ={'/'}><Button color="inherit" classes={{text:classes.text}}>Home</Button></Link>
           <Link to ={'/Shop'}><Button color="inherit" classes={{text:classes.text}}>Shop</Button></Link> 
            <Link to ={'/Baby'}><Button color="inherit" classes={{text:classes.text}}>Baby</Button></Link>
            <Link to ={'/signUp'}><Button color="inherit"classes={{text:classes.text}}>Login/Signup</Button></Link>
          </div>
        </div>
      </AppBar>
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
        logo: {
          maxWidth: 50,
        }

    })
)

export default NavigationBar;