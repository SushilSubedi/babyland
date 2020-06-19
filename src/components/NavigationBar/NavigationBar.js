import React, { useState, useEffect,createRef } from "react";
import {
  makeStyles,
  createStyles,
  Button,
  AppBar,
  Toolbar,
  fade,
} from "@material-ui/core";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector,useDispatch } from "react-redux";
import Account from '../Account/Account';
import { authCheckState } from '../Authentication/AuthRedux/action';


const NavigationBar = (props) => {

  const [open,setOpen] = useState(false);
  const [anchorEl,setAnchorEl] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthRedux.refreshToken !== null);

  const handleOpenMenu = (event) =>{
    setOpen(true);
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () =>{
    setOpen(false);
    setAnchorEl(null);
  }

  useEffect(()=>{
    dispatch(authCheckState());
  },[])

  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <div className={classes.navBar}>
        <Toolbar>
          <div style={{ paddingRight: "9%" }}>
            <Link to={"/"}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
          </div>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button classes={{ text: classes.text }}>Home</Button>
          </Link>
          <Link to={"/Shop"} style={{ textDecoration: "none" }}>
            <Button classes={{ text: classes.text }}>Shop</Button>
          </Link>
          <Link to={"/Baby"} style={{ textDecoration: "none" }}>
            <Button classes={{ text: classes.text }}>Baby</Button>
          </Link>

          {/* <Link to ={'/Hair'}><Button color="inherit" classes={{text:classes.text}}>Hair</Button></Link> */}
        </Toolbar>
        <div style={{ display: "flex" }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {token ? (
              <Button classes={{ text: classes.text }} onClick={handleOpenMenu}>
                <AccountCircleIcon fontSize="large"/>
                <Account open={open} handleClose={handleCloseMenu} anchorEl={anchorEl}/>
              </Button>
          ) : (
            <Link to={"/Authentication"} style={{ textDecoration: "none" }}>
              <Button classes={{ text: classes.text }}>
                Login | Register
              </Button>
            </Link>
          )}

          <Link to={"/Cart"}>
            <Button classes={{ text: classes.text }}>
              <ShoppingCartIcon fontSize="large" />
            </Button>
          </Link>
        </div>
      </div>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    navBar: {
      display: "flex",
      height: "54px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0% 8%",
    },
    text: {
      padding: "6px 11px",
      textTransform: "initial",
      fontSize: "16px",
    },
    logo: {
      maxWidth: 50,
    },
    search: {
      position: "relative",
      borderRadius: "9px",
      backgroundColor: fade(theme.palette.common.white, 0.4),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.4),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      color: "white",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "26ch",
        },
      },
    },
  })
);

export default NavigationBar;
