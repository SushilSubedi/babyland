import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import AppCardList from '../AppCard/AppCardList';

const Home = () =>{
    return(
        <div>
            <div style={{paddingTop:'2%'}}>
            <ImageSlider/>
            <AppCardList/>
            
            </div>
        </div>
    )
}
export default Home;