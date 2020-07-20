import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";

import Shop from "../components/Shop/Shop";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { makeStyles, createStyles } from "@material-ui/core";
import Cart from "../components/Cart/Cart";
import { useSelector } from 'react-redux';

const Routers = () => {
  const classes = useStyles();
  const token = useSelector((state) => state.AuthRedux.refreshToken !== null);


  let ayscAuth = lazy(() => import('../components/Authentication/Authentication'));
  let ayscWishlist = lazy(() => import('../components/Account/Wishlist/Wishlist'));
  let ayscAccount = lazy(() => import('../components/Account/Account'));
  let ayscLogout = lazy(() => import('../Logout/logout'));


  let switchs = (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/shop" component={Shop} />
      <Route path="/Authentication" component={ayscAuth} />
      <Route path="/Cart" component={Cart} />
      <Redirect to='/' />
    </Switch>
  );

  if (token) {
    switchs = (
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/shop" component={Shop} />
        <Route path="/logout" component={ayscLogout} />
        <Route path='/Account' component={ayscAccount} />
        <Route path='/Wishlist' component={ayscWishlist} />
        <Route path="/Cart" component={Cart} />
        <Redirect to='/' />
      </Switch>
    )
  }
  return (
    <Router>
      <div className={classes.mainPage}>
        <NavigationBar />
      </div>
      {switchs}
    </Router>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    mainPage: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "10px",
    },
  })
);

export default Routers;
