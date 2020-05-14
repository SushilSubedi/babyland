import React from 'react';
import {makeStyles, createStyles,Button,AppBar,Toolbar,fade } from '@material-ui/core';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const NavigationBar = () =>{
    const classes = useStyles();
return(
      <AppBar position="fixed" color="primary" elevation={0}>
        <div className={classes.navBar}>
          <Toolbar>
            <div style={{paddingRight:'9%'}}>
              <Link to={'/'}><img src={logo} alt="logo" className={classes.logo} /></Link>
            </div>
            <Link to ={'/'}><Button classes={{text:classes.text}}>Home</Button></Link>
            <Link to ={'/Shop'}><Button classes={{text:classes.text}}>Shop</Button></Link> 
            <Link to ={'/Baby'}><Button classes={{text:classes.text}}>Baby</Button></Link>
            {/* <Link to ={'/Hair'}><Button color="inherit" classes={{text:classes.text}}>Hair</Button></Link> */}
          </Toolbar>
          <div style={{display:'flex'}}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Link to ={'/Login'}><Button  classes={{text:classes.text}}>Login | Register</Button></Link>
            {/* <Link to ={'/Login'}><Button color="inherit">Login/Signup</Button></Link> */}
          </div>
        </div>
      </AppBar>
)
}

const useStyles = makeStyles(theme =>
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
        },
        search: {
          position: "relative",
          borderRadius: '9px',
          backgroundColor: fade(theme.palette.common.white, 0.4),
          "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.4)
          },
          marginLeft: 0,
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
          }
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        inputRoot: {
          color: "inherit"
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create("width"),
          width: "100%",
          color:'white',
          [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
              width: "26ch"
            }
          }
        }

    })
)

export default NavigationBar;