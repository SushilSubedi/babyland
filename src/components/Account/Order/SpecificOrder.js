import { createStyles, makeStyles,Box,Typography, Paper } from '@material-ui/core';
import React from 'react';

const SpecificOrder = (props) => {
    const classes = useStyles();

    const { orderItem,name,order,payment,emailaddress,fulladdress,countryCode,streetAddress,city,zipCode,number } = props;


    return (
        <Box component={Paper} elevation={0}>
            <Box className={classes.Order}>
                <Box className={classes.print}>
                    <div>
                        <div className={classes.address}>
                        <Typography style={{paddingRight:'4px'}} variant="h5">OrderId</Typography>
                        <Typography style={{alignSelf:'center'}} className={classes.data}>{order}</Typography>
                        </div>
                        <div className={classes.address}>
                            <Typography style={{paddingRight:'4px'}}  variant="h6">PaymentID</Typography>
                            <Typography style={{alignSelf:'center'}}  className={classes.data}>{payment}</Typography>
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6">Time</Typography>
                    </div>
                </Box>
                <Box className={classes.detail}>
                    <div>
                        <Typography className={classes.title}>{name}</Typography>
                        <Typography className={classes.data}>{emailaddress}</Typography>
                        <Typography className={classes.data}>{countryCode}</Typography>
                    </div>
                    <div style={{width:'40%'}}>
                        <div className={classes.mainAddress}>
                            <div className={classes.address}>
                                <Typography className={classes.title}>Full-Address:</Typography>
                                <Typography className={classes.data}>{fulladdress}</Typography>
                            </div>
                            <div className={classes.mainAddress}>
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
                       <div className={classes.address}>
                           <Typography className={classes.title}>Phone number:</Typography>
                           <Typography className={classes.data}>{number}</Typography>
                       </div>
                    </div>
                </Box>
            </Box>
            <Box className={classes.itemList}>
                {
                    orderItem.map((item,index) => (
                        <Box key={index} className={classes.item} component={Paper}>
                        <img className={classes.img} src={item.src} alt="alt"/>
                        <div>
                            <Typography className={classes.title}>{item.name}</Typography>
                            <Typography className={classes.title}>{item.price}</Typography>
                        </div>
                    </Box> 
                    ))
                }
            </Box>
        </Box>
    )
}
const useStyles = makeStyles(theme =>
createStyles({
    print: {
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid black'
    },
    detail: {
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid black'

    },
    itemList: {
        display:'flex'
    },
    item: {
        display:'flex'
    },
    img: {
        width:'80px',
        height:'60px'
    },
    address: {
        display:'flex',
        paddingRight:'2%'
    },
    mainAddress:{
        display:'flex'
    },
    title: {
        fontSize:'18px',
        fontWeight:'700'  
    },
    data: {
        letterSpacing:'1px',
        fontSize:'16px'
    }
}));

export default SpecificOrder;