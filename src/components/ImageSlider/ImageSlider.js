import React from 'react';
import { Zoom } from 'react-slideshow-image';
import toychild from '../../Asset/ImageSlider/toychild.jpg';
import mother from '../../Asset/ImageSlider/mother.jpg';
import babe from '../../Asset/ImageSlider/babe.jpg';
import { makeStyles,createStyles,Typography,Button } from '@material-ui/core';
// import classes from '*.module.css';
 
const zoomOutProperties = {
  duration: 9000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const ImageSlider = () => {
  const classes = useStyles();

  const data = [
    {img:babe,className:classes.babe},
    {img:mother,className:classes.mother},
    {img:toychild,className:classes.toychild},
  ]

    return (
      <div className={classes.slide}>
        <Zoom {...zoomOutProperties}>
          {
            data.map((item,index) => (
              <div key={index} style={{position:'relative'}}>
                  <img style={item.img === babe ? {height:'520px',width:'150%'} : {height:'520px', width:'100%'}} alt="img slider" src={item.img} />
                  <div className={item.className}>
                    <Typography variant="h5" className={classes.Typography}>we would like to shop more with our great deal</Typography>
                    <Button className={classes.Button}>shop</Button>
                  </div>
              </div>
            ))
          }
        </Zoom>
      </div>
    )
}
const useStyles = makeStyles(theme => 
  createStyles({
    mother: {
        position: 'absolute',
        bottom:'35%',
        right:'10%'
    },
    slide: {
      paddingTop:'2%'
    },
    toychild: {
      position: 'absolute',
      bottom:'20%',
      left:'10%'
    },
    babe: {
      position: 'absolute',
      bottom:'30%',
      right:'40%'
    },
    Typography: {
      color:'white',
      letterSpacing:'1px',
      paddingBottom:'2%'
    },
    Button: {
      background:'#373b38',
      width:'130px',
      textTransform:'initial',
      borderRadius:'9px',
      height:'50px',
      color:'white',
      fontSize:'18px',
      textAlign:'center',
      letterSpacing:'2px',
      "&:hover": {
        background:'#5b635d'
      }
    }
  }))
export default ImageSlider;
