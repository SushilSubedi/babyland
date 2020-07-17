import React,{useEffect} from 'react';
import { createStyles,makeStyles } from '@material-ui/core';
import { fetchWishlistData } from './WishlistRedux/action';
import { useDispatch } from 'react-redux';

const WishList = (props) => {
    // const classes = useStyles();
    const dispatch = useDispatch();

   useEffect(()=> {
    dispatch(fetchWishlistData());
   },[])
    return(
        <div>

        </div>
    )
}

// const useStyles = makeStyles(theme =>
//     createStyles({

//     }))


export default WishList;