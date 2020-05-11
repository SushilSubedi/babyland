import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import AppCard from '../AppCard/AppCard';

const Home = () =>{
    return(
        <div>
            <div style={{paddingTop:'2%'}}>
            <ImageSlider/>
            <AppCard/>
            
            </div>
        </div>
    )
}
export default Home;