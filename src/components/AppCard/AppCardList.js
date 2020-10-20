import React from 'react';
import { Grid } from '@material-ui/core';
import AppCard from './AppCard';
import babyfence from '../../Asset/ImageSlider/babybedfence.jpg';
import babycloth from '../../Asset/ImageSlider/babycloth.jpg';
import walkytalky  from '../../Asset/ImageSlider/walkytalky.jpg';



const Data = [
    {
        name:'Baby Protection',
        src:babyfence,
        description:'Protective bed fence for babies.Perfect for kid bed,solid wood bed,kid bed,thick mattresses bed,and any large-size beds. '
    },
    {
        name:'Baby Cloth',
        src:babycloth,
        description:'BabySuit for newly born babies.Like T-shirts, infant bodysuits come in a wide variety of designs.'
    },
    {
        name:'Toy',
        src:walkytalky,
        description:"Baby Walker with Adjustable Height and Push Handle Bar.Sturdy design to support and nurture baby's first steps  and many more",
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
                    />
                </Grid>
            ))}
        </Grid>

    </Grid>
)
}
export default AppCardList;
