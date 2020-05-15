import React from 'react';
import { Box, makeStyles, createStyles, Typography, Button } from '@material-ui/core';
import baby from '../../Asset/baby.jpg';

const HomeBlog = () =>{
    const classes = useStyles();
    return(
        <Box className={classes.Blog} >
            <div style={{alignSelf:'center'}}>
                <Typography  variant="h5" className={classes.Typography1}>BECAUSE ORDINARY WON’T DO.</Typography>
                <Typography className={classes.Typography2}>The arrival of a baby calls for a celebration. Finding the right gift to mark this occasion is a lot more than about welcoming the new arrival, it is about marveling at the miracle of life. Celebrate it with our curated gift hampers.</Typography>
                <Button className={classes.button}>
                    Discover More
                </Button>
            </div>
            <div style={{paddingBottom:'2%'}}>
                <img src= {baby} className={classes.img} alt="babysrc"/>
                {/* <p>hey there bro!</p> */}
            </div>
        </Box>
    )
}

const useStyles = makeStyles(theme => 
    createStyles({
        Blog: {
            backgroundColor:'#E2F3F0',
            padding:'2% 2% 0% 2%',
            display:'flex',
            justifyContent:'space-between'
        },
        Typography1: {
            fontSize:'22px',
            fontFamily:'inherit',
            fontWeight:'500',
            color:'#00669b'
        },
        Typography2: {
            width:'450px',
            paddingTop:'8px',
            fontSize:'16px',
            paddingBottom:'16px'
        },
        button: {
            backgroundColor:'hotpink',
            textTransform:'initial',
            fontSize:'16px',
            "&:hover": {
                backgroundColor:'#fc03d7'
            }
        },
        img: {
            width:'500px',
            height:'300px',
            opacity:'0.8'
            
        }


    }));


export default HomeBlog;