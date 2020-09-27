import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const Order = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

        </div>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            padding: '3% 0 0 0'
        }

    }))

export default Order;