import React from 'react';
import { Zoom } from 'react-slideshow-image';
import toychild from '../../Asset/ImageSlider/toychild.jpg';
import mother from '../../Asset/ImageSlider/mother.jpg';
import babe from '../../Asset/ImageSlider/babe.jpg'
 
const images = [
  mother,
  toychild,
  babe

];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const ImageSlider = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{height:'520px', width:'100%'}} src={each} />)
          }
        </Zoom>
      </div>
    )
}
export default ImageSlider;