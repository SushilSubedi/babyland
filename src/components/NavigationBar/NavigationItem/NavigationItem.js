import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return(
        <div className={classes.NavigationItem}>
            <NavLink
                style={props.icon ? {padding: '0px 10px 0px 10px '}: null}
                activeClassName={classes.active}
                exact= {props.exact}
                to= {props.to}
            >
                {props.children}
            </NavLink>
        </div>
    )
};

export default NavigationItem;