import React from 'react';
import { Box, makeStyles, createStyles, Typography, Button } from '@material-ui/core';

const HomeBlog = () =>{
    const classes = useStyles();
    return(
        <Box className={classes.Blog} >
            <Typography  variant="h5" className={classes.Typography1}>BECAUSE ORDINARY WON’T DO.</Typography>
            <Typography className={classes.Typography2}>The arrival of a baby calls for a celebration. Finding the right gift to mark this occasion is a lot more than about welcoming the new arrival, it is about marveling at the miracle of life. Celebrate it with our curated gift hampers.</Typography>
            <Button className={classes.button}>
                Discover More
            </Button>
        </Box>
    )
}

const useStyles = makeStyles(theme => 
    createStyles({
        Blog: {
            backgroundColor:'#E2F3F0',
            padding:'3% 1% 0% 2%'
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
        }

    }));


export default HomeBlog;