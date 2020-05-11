import React from 'react';
import 'antd/dist/antd.css';
import './ImageSlider.css';
import { Carousel } from 'antd';

const ImageSlider = () =>{
    return(
        <Carousel autoplay>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
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
//   createStyles({
//   }))

export default ImageSlider;