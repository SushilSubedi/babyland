import React from 'react';
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Footer = () => {
    const classes = useStyles();

    return(
        <Box className={classes.Footer}>
            <div className={classes.blog}>
              <Typography variant="h5"  className={classes.bloghead}>Babyland.com</Typography>
              <Typography className={classes.blogtext}>We aim to provide the best of the products and brands at the most reasonable prices with the unforgettable online shopping experience, and prompt customer service. We have set a benchmark to provide customers with a virtual physical store's shopping experience; online, without the trouble of moving around the city  heavy traffic and locating stores that may or may not meet your requirements at the end of the day. </Typography>
            </div>
            <div className={classes.copyright}>
              Copyright@2020 Babyland.com
            </div>
            <div className={classes.contact}>
              <div style={{width:'200px',alignSelf:'center'}} >
                <Typography variant="h5"  className={classes.followus}>Follow us:</Typography>
                <FacebookIcon  className={classes.Icon}/>
                <TwitterIcon className={classes.Icon}/>
                <YouTubeIcon className={classes.Icon}/>
                <InstagramIcon className={classes.Icon}/>
              </div> 

              <div className={classes.contactus }>
                  <Typography className={classes.contactustext}>Contact US:</Typography>
                  <div className={classes.text}>
                    <EmailIcon color='secondary'/>
                    <Typography className={classes.detail}>Email:info@babyland.com</Typography>
                  </div> 
                  <div  className={classes.text}>
                    <PhoneIcon color='secondary'/>
                    <Typography className={classes.detail}>Phone:9824490359</Typography>
                  </div>
                  <div  className={classes.text}>
                    <LocationOnIcon  color='secondary'/>
                    <Typography className={classes.detail}>Address:kathmandu</Typography>
                </div>
              </div>
            </div> 
        </Box>        
    )

 }

 const useStyles = makeStyles(theme => 
    createStyles({
        Footer: {
            background:'#E2F3F0',
            padding:'2%',
            display:'flex',
            justifyContent:'space-between',
         },
         copyright:{
           alignSelf:'flex-end',
           color:'black',
           width:'100%',
           textAlign:'center',
           letterSpacing:'1px',
           marginLeft:'-10%'
         },
         Icon:{
           marginLeft:'4%',
           padding:'1%',
           color:'secondary',
           cursor:'pointer'
         },
         detail: {
          letterSpacing:'1px',
          marginLeft:'7px'
         },
         connectus:{
           alignSelf:'flex-end',
           marginTop:'3%',
           color:'blue',
         },
         followus:{
          color:'#000080',
          fontSize:'20px',
          paddingLeft:'9px',
          letterSpacing:'1px',
          paddingBottom:'7px'

         },
         contactustext:{
           color:'#000080',
           fontSize:'20px',
           margin:'1% 3px',
           letterSpacing:'1px'
         },
         text:{
           color:'black',
           display:'flex',
           margin:'inherit'
         },
         bloghead:{
           color:'#00669b',
            letterSpacing:'1px',
           fontSize:'22px',
           fontWeight: '500',
           paddingBottom:'2px'
         },
         blogtext:{
           color:'black',
           width:'400px',
           letterSpacing:'1px'
         },
         contactus:{
           margin:'4% 0',
           padding:'3% 0 0 0'
         },
         contact: {
           alignSelf:'center'
         }

    }));


 export default Footer;