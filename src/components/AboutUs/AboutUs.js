import { createStyles, makeStyles,Box,Typography, Grid } from '@material-ui/core';
import React,{ useEffect } from 'react';
import { developer } from './Developer/DeveloperRedux/action';
import Developer from './Developer/Developer';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../GlobalComponents/Loader';

const AboutUs = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const [developer,setDeveloper] = useState([]);

    const developers = useSelector(state => state.DeveloperRedux.data) || [];
    const loading = useSelector(state => state.DeveloperRedux.loading) || [];
    

    useEffect(() => {
        if(developer.length === 0) {     
            dispatch(developer());
        }
    },[dispatch])
 
    return (
        <Box padding="3% 1%">
            {
                loading === true ? <Loader/> :
                <Box>
                <Box padding="1% 2%">
                    <Typography className={classes.Typography}>
                            As far we know e-commerce is set to be a complex website to build for beginner developer but we decided to test our skills.
                        It was quite the journey to develop this web app and in time frame we learnt alot about consistency performance and many more.
                        Basically, we are young developer came from Nepal and always looking for a great innovation.
                        This is web application where you can shop, read blog and provide amazing feedback so that we can improve everyday.
                        Anybody is able to use this for reference but if you want to use it commercially then lead developer and junior developer has to be notified. 
                        We list our team below so that you can contact them.<br/>
                    Thank you </Typography>
                </Box>
                <Box className={classes.developer} padding="0 2%">
                    <Typography variant="h5" className={classes.intro}>Our Developers</Typography>
                    <Grid item md={12}>
                        <Grid container>
                            {
                                developers.map((item,index) => (
                                    <Grid item md={4} key={index}>
                                        <Developer name={item.name} image={item.image} role={item.role} link={item.link}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Box>   
            }
        </Box>
    )

};

const useStyles= makeStyles(theme => 
    createStyles({
        developer: {
            textAlign:'center'
        },
        Typography: {
            fontSize:'16px',
            letterSpacing:'1px'
        },
        intro: {
            margin:'2%'
        }
    }));

export default AboutUs;