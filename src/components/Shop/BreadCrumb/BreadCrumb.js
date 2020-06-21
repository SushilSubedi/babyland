import React from 'react';
import { makeStyles,createStyles,Breadcrumbs,Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

const BreadCrumb = (props) =>{
    const classes =useStyles();

    return (
        <div className={classes.BreadCrumps}>
            <Breadcrumbs separator= ">" aria-label= "breadCrumbs">
                <Link className={classes.link}>Shop</Link>
                <Link className={classes.link}>{props.item}</Link>
            </Breadcrumbs>
        </div>
    )
}

const useStyles = makeStyles(
    createStyles({
        BreadCrumps: {
            background:'#E2F3F0',
            paddingTop:'3%'
        },
        link: {
            cursor:'pointer',
            color:'#00669b',
            fontSize:'19px',
            "&:hover":{
                textDecoration:'none'
            }
        }
    })
)

export default BreadCrumb;