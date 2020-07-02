import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Baby from "../components/Baby/Baby";
import Shop from "../components/Shop/Shop";
import Authentication from "../components/Authentication/Authentication";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { makeStyles, createStyles } from "@material-ui/core";
import Cart from "../components/Cart/Cart";
import Logout from "../Logout/logout";
import Account from "../components/Account/Account";
import WishList from "../components/Account/Wishlist/Wishlist";
import { useSelector } from 'react-redux';

const Routers = () => {
  const classes = useStyles();
  const token = useSelector((state) => state.AuthRedux.refreshToken !== null);

  let switchs = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Baby" component={Baby} />
        <Route path="/shop" component={Shop} />
        <Route path="/Authentication" component={Authentication} />
        <Route path="/Cart" component={Cart} />
        <Redirect to='/'/>
      </Switch>
  );

  if(token){
    switchs = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Baby" component={Baby} />
        <Route path="/shop" component={Shop} />
        <Route path="/logout" component={Logout} />
        <Route path ='/Account' component={Account}/>
        <Route path = '/Wishlist' component={WishList}/>
        <Route path="/Cart" component={Cart} />
        <Redirect to='/'/>
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
