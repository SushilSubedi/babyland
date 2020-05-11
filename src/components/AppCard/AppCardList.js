import React from 'react';
import { Grid } from '@material-ui/core';
import AppCard from './AppCard';
import babyfence from '../../Asset/ImageSlider/babybedfence.jpg';
import babycloth from '../../Asset/ImageSlider/babycloth.jpg';
import walkytalky  from '../../Asset/ImageSlider/walkytalky.jpg';



const Data = [
    {
        name:'Baby Bed Fence',
        src:babyfence,
        description:'Protective bed fence for babies'
    },
    {
        name:'Baby Cloth',
        src:babycloth,
        description:'Clothes for new born baby'
    },
    {
        name:'WalkyTalky',
        src:walkytalky,
        description:'WalkyTalky for toddler '
    },
    
    
]

const AppCardList = (props) =>{
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
