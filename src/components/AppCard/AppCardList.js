import React from 'react';
import { Grid } from '@material-ui/core';
import AppCard from './AppCard';
import Food from '../../Asset/ImageSlider/Food.jpg';
import babycloth from '../../Asset/ImageSlider/babycloth.jpg';
import walkytalky  from '../../Asset/ImageSlider/walkytalky.jpg';

const Data = [
    {
        name:'Nutrition Food',
        src:Food,
        description:'Discover the best weaning foods to feed your baby. See top finger foods for babies and get tips on feeding your baby well',
        // navigate:'/Food'
    },
    {
        name:'T-shirt Collection',
        src:babycloth,
        description:'BabySuit for newly born babies.Like T-shirts, infant bodysuits come in a wide variety of designs.',
        // navigate:'/T-shirt'
    },
    {
        name:'Toy collection',
        src:walkytalky,
        description:"Baby Walker with Adjustable Height and Push Handle Bar.Sturdy design to support and nurture baby's first steps  and many more",
        // navigate:'/Toys'
    },
    
    
]

const AppCardList = () =>{
return(
    <Grid item md={12}>
        <Grid container>
            {Data.map((item,index)=>(
                <Grid item md={4} key={index}>
                    <AppCard
                        name={item.name}
                        imgSrc={item.src}
                        description={item.description}
                        navigate={item.navigate}
                    />
                </Grid>
            ))}
        </Grid>

    </Grid>
)
}
export default AppCardList;
