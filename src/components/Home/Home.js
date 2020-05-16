import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import AppCardList from '../AppCard/AppCardList';
import { Typography,makeStyles,createStyles } from '@material-ui/core';
import HomeBlog from '../HomeBlog/HomeBlog';
import Connect from '../Connect/Connect';
import Footer from '../Footer/footer';

const Home = () =>{
    const classes = useStyles();
    return(
        <div style={{padding:'2% 2% 0% 2%'}}>
            <ImageSlider/>
            <div className={classes.CardTop}>
                <div className={classes.Typography}>
                    <Typography className={classes.Typo}>"We should always be careful what we are doing with baby"</Typography>
                </div>
                <AppCardList/> 
            </div>           
            <HomeBlog/>
            <Connect/>
            <Footer/>
        </div>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        CardTop:{
            padding:'2% 6%  2% 11%'
        },
        Typography: {
            display:'flex',
            justifyContent:'center',
            padding:'3%'
        },
        Typo: {
            fontSize:'19px',
            fontFamily:'cursive'
        }
    }))


export default Home;