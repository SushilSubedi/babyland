import { createStyles, makeStyles,Box,Typography, Paper, Grid } from '@material-ui/core';
import React from 'react';
import Moment from 'react-moment';


const SpecificOrder = (props) => {
    const classes = useStyles();

    const { orderItem,firstname,lastname,order,payment,emailaddress,fulladdress,countryCode,streetAddress,city,zipCode,Recipent,Time,total } = props;


    return (
        <Box padding="0 2%" component={Paper}>
            <Box className={classes.Order}>
                <Box padding="1% 0%">
                    <Typography className={classes.topTitle}>ORDER:</Typography>
                </Box>
                <Box className={classes.print}>
                    <div>
                        <div className={classes.address}>
                        <Typography variant="h5" className={classes.title}>OrderId:</Typography>
                        <Typography style={{alignSelf:'center'}} className={classes.data}>{order}</Typography>
                        </div>
                        <div className={classes.address}>
                            <Typography className={classes.title} variant="h5">PaymentID:</Typography>
                            <Typography className={classes.data}>{payment}</Typography>
                        </div>
                    </div>
                    <div style={{width:'24%'}}>
                        <Typography className={classes.title} variant="h5">Time:</Typography>
                        <Typography variant="h6" className={classes.data}><Moment format='MMMM Do YYYY, h:mm:ss a'>{Time}</Moment></Typography>
                    </div>
                </Box>
                <Box padding="1% 0%">
                     <Typography className={classes.topTitle}>PAYMENT DETAIL:</Typography>
                </Box>
                <Box className={classes.detail}>
                    <div >
                        <div className={classes.address}>
                            <Typography className={classes.title}>Full name:</Typography>
                            <Typography className={classes.data}>{`${firstname} ${lastname}`}</Typography>
                        </div>
                        <div className={classes.address}>
                            <Typography className={classes.title}>Email:</Typography>
                            <Typography className={classes.data}>{emailaddress}</Typography>
                        </div>
                        <div className={classes.address}>
                            <Typography className={classes.title}>country-code:</Typography>
                            <Typography className={classes.data}>{countryCode}</Typography>
                        </div>
                        <div className={classes.address}>
                            <Typography className={classes.title}>Total:</Typography>
                            <Typography style={{color:'#e85831'}}  className={classes.data}>Rs.{total}</Typography>
                        </div>
                        <div className={classes.address}>
                            <Typography className={classes.title}>Payment:</Typography>
                            <Typography style={{color:'#23a865'}} className={classes.data}>Successful</Typography>
                        </div>
                    </div>
                    <div style={{width:'23%'}}>
                        <div>
                            <div className={classes.address}>
                                <Typography className={classes.title}>Recipent:</Typography>
                                <Typography className={classes.data}>{Recipent}</Typography>
                            </div>
                            <div>
                                <Typography className={classes.title}>Full-Address:</Typography>
                                <Typography className={classes.data}>{fulladdress}</Typography>
                            </div>
                            <div>
                                <Typography className={classes.title}>Street-Address:</Typography>
                                <Typography className={classes.data}>{streetAddress}</Typography>
                            </div>
                       </div>
                       <div className={classes.address}>
                            <div className={classes.address}>
                                <Typography className={classes.title}>City:</Typography>
                                <Typography className={classes.data}>{city}</Typography>
                            </div>
                            <div className={classes.address}>
                                <Typography className={classes.title}>ZipCode:</Typography>
                                <Typography className={classes.data}>{zipCode}</Typography>
                            </div>
                       </div>
                    </div>
                </Box>
            </Box>
            <Box padding="1% 1%">
                <Typography className={classes.topTitle} >ITEM LIST:</Typography>
            </Box>
            <Box padding="0 0 2% 0" className={classes.itemList}>
                <Grid item md={12}>
                    <Grid container spacing={2}>
                    {
                        orderItem.map((item,index) => (
                            <Grid key={index} item md={3}>
                                <Box className={classes.item} component={Paper} elevation={0}>
                                    <img className={classes.img} src={item.img} alt="alt"/>
                                    <div>
                                        <Typography className={classes.name}>{item.name}</Typography>
                                        <Typography className={classes.price}>Rs.{item.value}</Typography>
                                    </div>
                                </Box> 
                            </Grid>
                        ))
                    }
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
const useStyles = makeStyles(theme =>
createStyles({
    print: {
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid #c5c7c6',
        paddingBottom:'1%'
    },
    detail: {
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid #c5c7c6',
        paddingBottom:'1%'
    },
    itemList: {
        display:'flex'
    },
    item: {
        display:'flex'
    },
    img: {
        width:'80px',
        height:'60px',
        paddingRight:'1%'
    },
    address: {
        display:'flex',
        paddingRight:'2%'
    },
    title: {
        fontSize:'18px',
        fontWeight:'700'  
    },
    data: {
        letterSpacing:'1px',
        fontSize:'16px',
        alignSelf:'center',
        paddingLeft:'6px'
    },
    price: {
        letterSpacing:'1px',
        fontSize:'16px',
        alignSelf:'center',
        paddingLeft:'6px',
        color:'#e85831'
    },
    name: {
        fontSize:'18px',
        fontWeight:'600',
        color:'#00669b' 
    },
    topTitle: {
        color:'#00669b',
        fontSize:'16px',
        fontWeight:'700'
    }
}));

export default SpecificOrder;