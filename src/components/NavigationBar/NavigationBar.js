import React from 'react';
<<<<<<< HEAD
import {makeStyles, createStyles,Typography,Button,AppBar } from '@material-ui/core';
=======
import {makeStyles, createStyles,Typography,Button,AppBar,Toolbar } from '@material-ui/core';
import logo from './logo.png';
import { Link } from 'react-router-dom';
>>>>>>> dce0ecf40c42a403b94b6774056ace92d2d32b0b

const NavigationBar = () =>{
    const classes = useStyles();
return(
<<<<<<< HEAD
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
            <Button color="inherit" classes={{text:classes.text}}>Shop</Button>
            <Button color="inherit" classes={{text:classes.text}}>Baby</Button>
            <Button color="inherit"classes={{text:classes.text}}>Login/Signup</Button>
          </div>
        </div>
      </AppBar>
  </div>
=======
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
>>>>>>> dce0ecf40c42a403b94b6774056ace92d2d32b0b
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
<<<<<<< HEAD
=======
        logo: {
          maxWidth: 50,
        }
>>>>>>> dce0ecf40c42a403b94b6774056ace92d2d32b0b

    })
)

export default NavigationBar;