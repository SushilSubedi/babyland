import React from 'react';
import { Grid } from '@material-ui/core';
import ShopCard from './ShopCard/ShopCard';

const Data = [
    {
        name: 'clothes',
        description: 'Protective bed fence for babies.'
    },
    {
        name: 'clothes',
        description: 'Protective bed fence for babies.'
    },
    {
        name: 'clothes',
        description: 'Protective bed fence for babies'
    },
    {
        name: 'clothes',
        description: 'Protective bed fence for babies'
    },
    {
        name: 'clothes',
        description: 'Protective bed fence for babies.'
    },
    {
        name: 'clothes',
        description: 'Protective bed fence for babies.'
    }
]

const ShopCartList = (props) =>{
    return(
        <Grid item md={12}>
            <Grid container>
                {Data.map((item,index) => (
                    <Grid item md={4} key={index}>
                        <ShopCard
                            name={item.name}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ShopCartList;