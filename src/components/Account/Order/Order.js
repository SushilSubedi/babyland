import React, { useEffect } from 'react';
import { Box, Container, createStyles, makeStyles } from '@material-ui/core';
import { useSelector,useDispatch } from'react-redux';
import  { fetchOrder } from './OrderRedux/action';
import Loader from '../../../GlobalComponents/Loader';
import SpecificOrder from './SpecificOrder';


const Order = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const order = useSelector(state => state.OrderRedux.data) || [];
    const loading = useSelector(state => state.OrderRedux.loading);

    useEffect(() => {
        if(order.length === 0){
            dispatch(fetchOrder());
        }
    },[order,dispatch])

    useEffect(() => {
        console.log("order",order);
    },[order])

    return (
        <div className={classes.root}>
            {
                loading === true ? 
                <Loader/>
                :
                <Box>
                    <Container className={classes.Container}>
                        {
                            order.map((item,index) => (
                                <div style={{padding:'3% 0'}} key={index}>
                                    <SpecificOrder
                                        orderItem= {item.orderItem}
                                        firstname={item.paymentDetails.payer.payer_info.first_name}
                                        lastname={item.paymentDetails.payer.payer_info.last_name}
                                        countryCode={item.paymentDetails.payer.payer_info.country_code}
                                        emailaddress={item.paymentDetails.payer.payer_info.email}
                                        fulladdress={item.paymentDetails.payer.payer_info.shipping_address.line1}
                                        streetaddres={item.paymentDetails.payer.payer_info.shipping_address.line2}
                                        city={item.paymentDetails.payer.payer_info.shipping_address.city}
                                        zipCode={item.paymentDetails.payer.payer_info.shipping_address.postal_code}
                                        Recipent={item.paymentDetails.payer.payer_info.shipping_address.recipient_name}
                                        order={item.paymentDetails.cart}
                                        payment={item.paymentDetails.id}
                                        Time={item.paymentDetails.create_time}
                                        total={item?.paymentDetails?.transactions[0]?.amount?.total}
                                    />
                                </div>
                            ))
                        }
                    </Container>
                </Box>
            }
        </div>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            padding: '4% 2% 0 2%'
        },
        Container:{
            flexDirection:'column'
        }
    }))

export default Order;