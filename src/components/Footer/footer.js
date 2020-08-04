import React from 'react';
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const Footer = () =>{
    const classes = useStyles();
    return(
        
        <Box className={classes.Footer}>
          <div className={classes.blog} >
            <Typography  className={classes.bloghead}>Babyland.com</Typography>
            <Typography className={classes.blogtext}>We aim to provide the best of the products and brands at the most reasonable prices with the unforgettable online shopping experience, and prompt customer service. We have set a benchmark to provide customers with a virtual physical store's shopping experience; online, without the trouble of moving around the city  heavy traffic and locating stores that may or may not meet your requirements at the end of the day. </Typography>
          </div>
          <div className={classes.copyright}>
            Copyright@2020 Babyland.com
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
              <div className={classes.icons}>
                <div className={classes.text}>
                  <EmailIcon color='secondary' className={classes.emailicon}/>
                  <Typography >Email:info@babyland.com</Typography>
                </div> 
                <div  className={classes.text}>
                  <PhoneIcon   color='secondary' className={classes.phoneicon}/>
                  <Typography style={{bottom:'30px', position:'relative'}}>Phone:9824490359</Typography>
                </div>
                <div  className={classes.text}>
                  <LocationOnIcon  color='secondary' className={classes.addressicon}/>
                  <Typography style={{position:'relative',bottom:'58px'}}> Address:kathmandu</Typography>
               </div>
              </div>
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
           marginLeft:'8px',
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
           position:'relative',
           top:'16px',
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
           width:'400px',
         },
         contactus:{
           marginTop:'30px',
           
         },
         emailicon:{
           position:'relative ',
           top:'29px',
           right:'29px',
         },
         phoneicon:{
           position:'relative',
           right:'29px',
         },
         addressicon:{
           position:'relative',
           right:'29px',
         }

    }));


 export default Footer;