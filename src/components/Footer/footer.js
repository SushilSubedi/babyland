import React from 'react';
import { Box, makeStyles, createStyles, Typography, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import babylogo from '../../components/NavigationBar/logo.png';



const Footer = () =>{
    const classes = useStyles();
    return(
        
        <Box className={classes.Footer}>
          <div className={classes.blog} >
            <babylogo/>
            <Typography  className={classes.bloghead}>Babyland.com</Typography>
            <Typography className={classes.blogtext}>We aim to provide the best of the products and<br/> 
              brands at the most reasonable prices with the<br/> 
               unforgettable online shopping experience, and <br/>
               prompt customer service. We have set a benchmark <br/>
               to provide  our customers with a virtual physical <br/>
               store's shopping experience; online, without the <br/>
               trouble of moving around the city  heavy traffic <br/>
               and locating stores that may or may not meet your <br/>
               requirements at the end of the day. </Typography>
          </div>
          <div className={classes.copyright}>
            Copyright 2020 Babyland.com
          </div>
          <div className={classes.contact}>
            <div  >
              <Typography  className={classes.followus}>Follow us</Typography>
              <FacebookIcon  className={classes.Icon}/>
              <TwitterIcon className={classes.Icon}/>
              <YouTubeIcon className={classes.Icon}/>
              <InstagramIcon className={classes.Icon}/>
              
            </div> 
            <div className={classes.contactus }>
              <Typography className={classes.contactustext}>Contact US</Typography>
              <Typography className={classes.text}>
                <EmailIcon color='secondary'/>
                Email:info@babyland.com
              </Typography> 
              <Typography  className={classes.text}>
                <PhoneIcon  color='secondary'/>
                Phone:9824490359
              </Typography>
              <Typography  className={classes.text}>
                <LocationOnIcon  color='secondary'/>
                Address:kathmandu
               </Typography>
            </div>
          </div>
          

          
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


 export default Footer;