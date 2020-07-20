import React from 'react';
import { Grid } from '@material-ui/core';
import ShopCard from './ShopCard/ShopCard';
import { useSelector } from 'react-redux';


const ShopCartList = (props) =>{
    const { Data } = props;
    const token = useSelector(state => state.AuthRedux.refreshToken) || [];
    const wishlistData = useSelector(state => state.WishlistRedux.data) || [];
    const cartData = useSelector(state => state.CartRedux.data) || [];

    return(
        <Grid item md={12}>
            <Grid container>
                {Data.map((item,index) => (
                    <Grid item md={4} key={index}>
                        <ShopCard
                            name={item.name}
                            description={item.description}
                            price={item.value}
                            img={item.img}
                            identifer={item.id}
                            Token={token}
                            WishlistData={wishlistData}
                            CartData={cartData}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ShopCartList;