import React from 'react';
import { Grid } from '@material-ui/core';
import ShopCard from './ShopCard/ShopCard';


const ShopCartList = (props) =>{
    const { Data } = props;
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
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ShopCartList;