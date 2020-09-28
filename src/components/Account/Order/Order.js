import React, { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { useSelector,useDispatch } from'react-redux';
import  { fetchOrder } from './OrderRedux/action';
import Loader from '../../../GlobalComponents/Loader';


const Order = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const order = useSelector(state => state.OrderRedux.data) || []
    const loading = useSelector(state => state.OrderRedux.loading);

    useEffect(() => {
        if(order.length === 0){
            dispatch(fetchOrder());
        }
    },[order,dispatch])

    return (
        <div className={classes.root}>
            {
                loading === false ? 
                <Loader/>
                :
                <div>
                    
                </div>
            }
        </div>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            padding: '4% 2% 0 2%'
        }

    }))

export default Order;