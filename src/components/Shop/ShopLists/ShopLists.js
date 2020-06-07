import React from 'react';
import { makeStyles,createStyles,Box,Paper, Container } from '@material-ui/core';

const ShopLists = () =>{
    const classes = useStyles();
    return(
       <Box className={classes.ShopItems} component={Paper}>
           <Container>
                ShopItems
           </Container>
       </Box>
    )
}

const useStyles = makeStyles(
    createStyles({
        ShopItems:{
            background:'red',
            height:'100%'
        }
    })
)

export default ShopLists;