import React, { useEffect } from 'react';
import { makeStyles, createStyles, Box, Container, Typography } from '@material-ui/core';
import { fetchWishlistData } from './WishlistRedux/action';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../Cart/CartRedux/action';
import WishlistCard from './WishlistCard';
import { Grid } from '@material-ui/core';
import Loading from '../../../GlobalComponents/Loader';

const WishList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const cartData = useSelector(state => state.CartRedux.data) || [];
    const wishlistData = useSelector(state => state.WishlistRedux.data) || [];
    const loading = useSelector(state => state.WishlistRedux.loading);

    useEffect(() => {
        if (wishlistData.length === 0) {
            dispatch(fetchWishlistData());

        }
        if (cartData.length === 0) {
            dispatch(fetchCartData());
        }

    }, [dispatch,wishlistData,cartData])

    return (
        <Box>
            {
                loading === true ? <Loading/>
                :
                <Box padding="5% 3% 0% 6%">
                    <div>
                        <Typography className={classes.wishlisttext}>
                            Wishlist
                        </Typography>
                    </div>
                    <Grid item md={12}>
                        <Grid container>
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
                </Box >
            }
        </Box>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wishlisttext: {
            fontSize: "27px",
            color: "blue",
            textAlign:'center',
            paddingRight:'8%'
        },

}))

export default WishList;