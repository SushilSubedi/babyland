import React, { useState } from 'react';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton } from '@material-ui/core';

import Card from '../../GlobalComponents/card';
import Items from './allitems';




const Cart = (props) => {
    const classes = useStyles();


    return (
        <div >

            <Box component={Paper} className={classes.cart}>


                <Typography variant="h5">
                    Dear costumer we hereby notice you that,if  the price of the items is above RS2000 delivery charger will be free.
                    </Typography>

            </Box>
            <div className={classes.cart}>
                <Card />
                <div className={classes.items}>
                    <Items />
                </div>




            </div>

        </div>





    )

}


const useStyles = makeStyles(
    createStyles({
        cart: {
            width: "1200px",
            padding: "40px",
            margin: "3% 0% 0% 8%",
            display: "flex",
            justifyContent: "space-evenly ",

        },

        items: {
            marginLeft: "520px"

        },



    })
)



export default Cart;

