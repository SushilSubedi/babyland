import React from 'react';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import ShopLists from './ShopLists/ShopLists';
import FilterItems from './FilterItems/FilterItems';
import { Grid } from '@material-ui/core';

const Shop = () =>{
    return(
        <div>
            <BreadCrumb/>
            <FilterItems/>
            <ShopLists/>
        </div>
    )
}

export default Shop;