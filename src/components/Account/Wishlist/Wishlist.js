import React, { useEffect } from 'react';
import { makeStyles, createStyles, Box, Container, Typography } from '@material-ui/core';
import { fetchWishlistData } from './WishlistRedux/action';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../Cart/CartRedux/action';
import WishlistCard from './WishlistCard';


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
        <Box padding="5% 2% 0% 2%">
            <Container>
                <div>
                    <Typography className={classes.wishlisttext}>
                        WishList
                    </Typography>
                </div>

                <div>
                    {wishlistData.map((item, index) => (
                        <WishlistCard
                            key={index}
                            name={item.name}
                            description={item.description}
                            price={item.value}
                            img={item.img}
                            identifer={item.id}
                            quantity={item.quantity}
                        />
                    ))}
                </div>
            </Container>
        </Box >




    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wishlisttext: {
            fontSize: "30px",
            color: "blue",
            marginLeft: "50%",
        }

    }))





export default WishList;