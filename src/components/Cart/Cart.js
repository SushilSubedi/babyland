import React, { useState, useEffect } from 'react';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton } from '@material-ui/core';

import Card from '../../GlobalComponents/card';
import Items from './allitems';
import { useSelector, useDispatch } from 'react-redux';
import { fetchcartData } from "./CartRedux/action";




const Cart = (props) => {
    const classes = useStyles();
    const { Data } = props;
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.CartRedux.data) || [];



    useEffect(() => {
        if (cartData.length === 0) {
            dispatch(fetchcartData());
        }
    }, [cartData]);


    return (
        <div >

            <Box component={Paper} className={classes.cart}>


                <Typography variant="h5">
                    Dear costumer we hereby notice you that,if  the price of the items is above RS2000 delivery charge will be free.
                    </Typography>

            </Box>
            <div className={classes.cart}>
                {cartData.map((item, index) => (
                    <Card
                        CartData={cartData}
                        name={item.name}
                        description={item.description}
                        price={item.value}
                        img={item.img} />
                ))}
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

