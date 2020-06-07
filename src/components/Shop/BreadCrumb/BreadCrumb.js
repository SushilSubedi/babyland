import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core';

const BreadCrumb = () =>{
    const classes =useStyles();
    return (
        <div className={classes.BreadCrumps}>
            BreadCrumps
        </div>
    )
}

const useStyles = makeStyles(
    createStyles({
        BreadCrumps: {
            background:'#E2F3F0',
            paddingTop:'4%'
        }
    })
)

export default BreadCrumb;