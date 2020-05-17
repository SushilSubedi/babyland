import React from 'react';
import { Box, makeStyles, createStyles, Typography, Button } from '@material-ui/core';




const ImageSlider = () =>{
    const classes = useStyles();
    return(
        
        <Box className={classes.Footer}>
          
          

          
        </Box>        
    )

 }

 const useStyles = makeStyles(theme => 
    createStyles({
        Footer: {
            padding:'1%',
            backgroundColor:'pink',
            display:'flex',
            justifyContent:'space-between',
         },
         copyright:{
           alignSelf:'flex-end',
           color:'black',
         },
         Icon:{
           marginLeft:'6px',
           color:'secondary',
         },
         connectus:{
           alignSelf:'flex-end',
           marginTop:'3%',
           color:'blue',
         },
         followus:{
           color:'#000080',
           fontSize:'20px',

         },
         contactustext:{
           color:'#000080',
           fontSize:'20px',
         },
         text:{
           color:'black',
           fontSize:'15px',
         },
         bloghead:{
           color:'#000080',
           fontSize:'20px',
         },
         blogtext:{
           color:'black',
         }

    }));


 export default ImageSlider;