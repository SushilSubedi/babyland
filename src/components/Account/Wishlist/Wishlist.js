import React, { useEffect } from 'react';
import { makeStyles, createStyles, Box, Container, Typography } from '@material-ui/core';
import { fetchWishlistData } from './WishlistRedux/action';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../Cart/CartRedux/action';
import WishlistCard from './WishlistCard';
import { Grid } from '@material-ui/core';


const WishList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const cartData = useSelector(state => state.CartRedux.data) || [];
    const wishlistData = useSelector(state => state.WishlistRedux.data) || [];

    useEffect(() => {
        if (wishlistData.length === 0) {
            dispatch(fetchWishlistData());

        }
        if (cartData.length === 0) {
            dispatch(fetchCartData());
        }

    }, [dispatch])

    return (
        <Box padding="5% 3% 0% 12%" style={{ marginLeft: "3%" }} >
            <div style={{}}>
                <div>
                    <Typography className={classes.wishlisttext}>
                        WishList
                    </Typography>
                </div>

                <div style={{ marginRight: "7%", marginBottom: "12%" }}>
                    <Grid item md={12} >
                        <Grid container direction="row" >
                            {wishlistData.map((item, index) => (
                                <Grid item md={6} key={index}>
                                    <WishlistCard
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.value}
                                        img={item.img}
                                        identifer={item.id}
                                        quantity={item.quantity}
                                        PostId={item.postId}

                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Box >




    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wishlisttext: {
            fontSize: "30px",
            color: "blue",
            marginLeft: "40%",
        },



    }))





export default WishList;