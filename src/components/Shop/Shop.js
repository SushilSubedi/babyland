import React from 'react';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import ShopLists from './ShopLists/ShopLists';
import FilterItems from './FilterItems/FilterItems';
import ShopItems from './ShopItems/ShopItems';
import { Grid } from '@material-ui/core';

const Shop = () =>{
    return(
        <div>
            <BreadCrumb/>
            <Grid item md={12}>
                <Grid container>
                    <Grid item md={3}>
                        <ShopLists/>
                    </Grid>
                    <Grid item md={9}>
                        <FilterItems/>
                        <ShopItems/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Shop;