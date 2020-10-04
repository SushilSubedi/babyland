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
                        <SpecificOrder/>
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