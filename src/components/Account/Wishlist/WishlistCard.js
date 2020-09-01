import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton, Snackbar } from '@material-ui/core';
import fire from "../../../config/fire";
import { useDispatch, useSelector } from 'react-redux';
import { wishlistUpdateData } from './WishlistRedux/action';

const WishlistCard = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { name, description, img, price, identifer, quantity } = props;
  const cartData = useSelector(state => state.CartRedux.data) || [];
  const element = cartData.find(element => element.id === identifer);
  const dispatch = useDispatch();


  const addtocart = () => {
    const userId = localStorage.getItem('userID');
    const newPostKey = fire.database().ref().child("wishlist").push().key;
    const updateData = {};
    const data = {
      postId: newPostKey,
      name: name,
      description: description,
      value: price,
      img: img,

      quantity: quantity,

    }

    updateData[`/wishlist/` + userId + '/' + newPostKey] = data;
    fire.database().ref().update(updateData).then(doc => {
      dispatch(wishlistUpdateData());

    })
  }

  return (
    <div>

      <Box component={Paper} className={classes.card}>
        <Container className={classes.Container}>
          <div>
            <img className={classes.img} src={img} alt="simple img" />

          </div>

          <div className={classes.details}>

            <Typography variant="h6" className={classes.Typography1}>{name}</Typography>
            <Typography className={classes.Typography2}>{description}</Typography>
            <Typography variant="h6" style={{ color: '#e85831', fontWeight: '1000', fontSize: "30px" }}>Rs{price}</Typography>

            <div className={classes.buttons}>
              <Button className={classes.remove} >Remove</Button>
              {element === undefined ?
                <Button className={classes.addtocart} disable={loading} onClick={addtocart}>Addtocart</Button> :
                <Button disable style={{ cursor: "none" }}>Added</Button>}
            </div>
          </div>
        </Container>
      </Box>

    </div>
  )



}

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      display: 'flex',

      width: '700px',
      flexWrap: "wrap",
      overflow: "hidden",

      marginTop: "9%",
      marginLeft: "25%",
      minHeight: '200px',
      justifyContent: 'center',
      padding: '2% 1% 4% 1%',
      alignItems: 'center',

      border: '1px solid rgba(0,0,0,0.1)',
      boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)'
    },
    img: {
      width: '200px',
      height: '300px',
      marginTop: '4px'
    },
    Container: {
      textAlign: 'center',
      display: "flex",
      flexDirection: "row",

    },


    addtocart: {
      padding: '2%',
      width: '130px',
      height: '50px',
      backgroundColor: 'hotpink',
      color: 'white',
      textTransform: 'initial',
      marginLeft: "50px",
      "&:hover": {
        backgroundColor: '#fc03d7'
      }
    },
    Typography1: {
      fontFamily: 'inherit',
      fontWeight: '900',
      color: '#00669b',
      fontSize: "35px",
      marginBottom: "15px",
    },
    Typography2: {
      fontSize: '25px',
      fontWeight: '400',
      fontFamily: 'inherit',
      color: 'cbd0d6',
      marginBottom: "10px",
    },
    remove: {
      padding: '2%',
      width: '130px',
      height: '50px',
      backgroundColor: '#808080',
      color: 'white',
      marginRight: "50px",
      textTransform: 'initial',
      "&:hover": {
        backgroundColor: 'red'
      }

    },

    wishlisttext: {
      fontSize: "25px",
      color: "blue",
      marginLeft: "50%"
    },

    details: {
      display: "flex",
      flexDirection: "column",

    },
    buttons: {
      display: "inline-block",
      marginTop: "70px",


    },


  })
)

export default WishlistCard;