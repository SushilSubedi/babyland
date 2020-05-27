import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import Baby from '../components/Baby/Baby';
import Shop from '../components/Shop/Shop';
import Authentication from '../components/Authentication/Authentication';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { makeStyles, createStyles } from '@material-ui/core'

const Routers = () => {
    const classes = useStyles();
    return(
        <Router>
            <div className={classes.mainPage}>
                <NavigationBar/>
            </div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Baby" component={Baby}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/Authentication" component={Authentication}/>
                <Route path ='/logout' component={Shop}/>
            </Switch>
        </Router>
    )
}

const useStyles = makeStyles(theme => 
    createStyles({
      mainPage: {
        display:'flex',
        flexDirection: 'column',
        paddingTop:'10px'
      }
}))

export default Routers;