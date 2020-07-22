import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton } from '@material-ui/core';


import Items from './allitems';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData } from "./CartRedux/action";
import CardList from './CardList';



const Cart = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const cartData = useSelector(state => state.CartRedux.data) || [];

    useEffect(() => {
        console.log("hello", cartData);

    }, [cartData]);

    useEffect(() => {
        if (cartData.length === 0) {
            dispatch(fetchCartData());
        }
    }, [cartData]);


    return (
        <div className={classes.cart} >
            <div>
                <Box component={Paper} className={classes.notice}>


                    <Typography variant="h5">
                        Dear costumer we hereby notice you that,if  the price of the items is above RS2000 delivery charge will be free.
                    </Typography>

                </Box>
            </div>
            <div className={classes.items}>
                <Items />
            </div>

            <div className={classes.CardList}>
                <CardList />
            </div>








        </div>





    )

}


const useStyles = makeStyles(
    createStyles({
        notice: {
            width: "1200px",
            padding: "60px",
            margin: "3% 0% 6% 8%",



        },
        cart: {
            display: "flex",
            flexDirection: 'column',

            justifyContent: "space-between",
            width: "900px"


        },

        items: {
            position: "absolute",
            left: "1300px",
            top: "330px",


        },
        CardList: {
            display: "flex",
            width: "1200px",
            // height: "600px",
            justifyContent: "space-between",
            margin: "1% 5% 22% 5%"

        }


    })
)



export default Cart;

