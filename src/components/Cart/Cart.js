import React, { useState } from 'react';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton } from '@material-ui/core';

import Card from '../../GlobalComponents/card';
import Items from './allitems';
import Total from './Total';



const Cart = (props) => {
    const classes = useStyles();
    // const [quantity, setQuantity] = useState('');

    return (
        <div >

            <Box component={Paper} className={classes.cart}>


                <Typography variant="h5">
                    Dear costumer we hereby notice you that,if  the price of the items is above RS2000 delivery charger will be free.
                    </Typography>

            </Box>
            <div className={classes.cart}>
                <Card />
                <Items />
                <Total />

            </div>

        </div>





    )

}


const useStyles = makeStyles(
    createStyles({
        cart: {
            width: "1200px",
            // border: "5px ",
            padding: "40px",
            margin: "3% 0% 0% 8%",
            display: "flex",
            justifyContent: "space-around",



        },


    })
)



export default Cart;

