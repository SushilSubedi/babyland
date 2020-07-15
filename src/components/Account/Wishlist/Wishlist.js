import React,{useEffect} from 'react';
import { createStyles,makeStyles } from '@material-ui/core';
import fire from '../../../config/fire';

const WishList = () => {
    const classes = useStyles();
        const dataRetireve = () =>{
        const userId = localStorage.getItem('userID');
        const cartData = [];
        fire.database().ref(`/cart/${userId}`).on("value",(snapshort)=>{
            const data = snapshort.val();
            //abstract keys from an object
            const keys = Object.keys(data);
           for(let i = 0; i < keys.length; i++){
               const k = keys[i];
               const dataCollection ={
                name: data[k].name,
                description: data[k].description,
                value: data[k].value,
                img: data[k].img
               }
               cartData.push(dataCollection);
           }
        })
    }

   useEffect(()=> {
    dataRetireve();
   },[])
    return(
        <div>

        </div>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({

    }))


export default WishList;