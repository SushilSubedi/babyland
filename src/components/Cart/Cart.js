import React, { useState, useEffect } from 'react';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton } from '@material-ui/core';


import Items from './Allitems';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData } from "./CartRedux/action";
import CardList from './CardList';



const Cart = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const cartData = useSelector(state => state.CartRedux.data) || [];



    useEffect(() => {
        if (cartData.length === 0) {
            dispatch(fetchCartData());
        }
    }, [cartData]);


    return (
        <div>

            <div>
                <Box component={Paper} className={classes.message}>
                    <Typography variant="h5">
                        Dear costumer we hereby notice you that,if  the price of the items is above RS2000 delivery charge will be free.
                        </Typography>

                </Box>
            </div>
            <div className={classes.cart}>
                <div className={classes.CardList}>
                    <CardList />
                </div>
                <div className={classes.items}>
                    <Items

                        CartData={cartData} />


                </div>


            </div>
        </div>






    )

}


const useStyles = makeStyles(
    createStyles({
        message: {
            width: "1175px",
            padding: "3% 2% 2% 4%",
            margin: "3% 8% 0% 2%"




        },
        cart: {

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },

        items: {
            width: "fit-content",
            marginLeft: "auto",
            marginTop: "4% 6% 0% 0%"

        },
        CardList: {
            display: "flex",
            width: "1200px",
            justifyContent: "space-between",
            margin: "2% 2% 1% 3%"


        },


    })
)



export default Cart;

