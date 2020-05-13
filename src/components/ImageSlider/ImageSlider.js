import React from 'react';
import 'antd/dist/antd.css';
import './ImageSlider.css';
import { Carousel } from 'antd';
import mothertoddler from '../../Asset/ImageSlider/mother-and-toddler.jpg';
import babymother from '../../Asset/ImageSlider/babymother.jpeg';

const ImageSlider = () =>{
    
    return(
        <Carousel autoplay>
            <div>
                {/* <img src={mothertoddler} height='400px' width='1450px' alt="Image first to appear"/> */}
                <h1>1</h1>
            </div>
            <div>
            <h1>1</h1>
                
                {/* <img src={babymother} height='400px' width='1300px' alt= "Image second to appe/> */}
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    )
}

// const useStyles = makeStyles(theme =>
//     createStyles({
        
//         img:{
//             width:'200px',
//             height:'200px',
            
//         }
//     })
//     )

export default ImageSlider;