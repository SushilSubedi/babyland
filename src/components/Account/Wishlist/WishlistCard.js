import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Box, Container, Typography, Paper, Button } from '@material-ui/core';
import fire from "../../../config/fire";
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { cartUpdateData } from '../../Cart/CartRedux/action';
import { wishlistDeleteData } from '../Wishlist/WishlistRedux/action';

const WishlistCard = (props) => {

  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const { name, description, img, price, identifer, PostId } = props;

  const cartData = useSelector(state => state.CartRedux.data) || [];
  const element = cartData.find(element => element.id === identifer);
  const dispatch = useDispatch();

  const deletedata = () => {
    const userId = localStorage.getItem('userID');
    fire.database().ref(`/wishlist/${userId}/${PostId}`).set(null).then(doc =>
      dispatch(wishlistDeleteData(PostId))
    )
  }


  const addtocart = (name, description, price, img) => {
    console.log(name, description, price, img);
    const userId = localStorage.getItem('userID');
    const newPostKey = fire.database().ref().child("cart").push().key;
    const updateData = {};
    const data = {
      postId: newPostKey,
      name: name,
      description: description,
      value: price,
      img: img,
      id: identifer,
      quantity: 1

    }
    updateData[`/cart/` + userId + '/' + newPostKey] = data;
    fire.database().ref().update(updateData).then(doc => {
      dispatch(cartUpdateData(data));
    })
  }

  useEffect(() => {
    if (element !== undefined) {
      setLoading(false);
    }
  }, [element]);

  return (
    <div>

      <Box component={Paper} className={classes.card}>
        <Container className={classes.Container}>

          <div>
            <img className={classes.img} src={img} alt="simple img" />
          </div>

          <div>
            <Typography variant="h6" className={classes.Typography1}>{name}</Typography>
            <Typography className={classes.Typography2}>{description}</Typography>
            <Typography variant="h6"  className={classes.price}>Rs{price}</Typography>

            <div className={classes.buttons}>

              <div>
                <Button className={classes.remove} onClick={deletedata} >Remove</Button>
              </div>

              <div style={{ position: 'relative' }}>
                {element === undefined ?
                  <Button className={classes.addtocart} disabled={loading} onClick={() => addtocart(name, description, price, img)}>Addtocart</Button> :
                  <Button disabled style={{ cursor: "none" }}>Added</Button>}
                {loading === true && <CircularProgress className={classes.loader} />}
              </div>

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

      width: '570px',
      flexWrap: "wrap",
      overflow: "hidden",
      minHeight: '160px',
      justifyContent: 'center',
      padding: '2% 9% 4% 1%',
      alignItems: 'center',
      borderRadius:'4px',
      marginTop:'8%',
      boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)'
    },
    img: {
      width: '150px',
      height: '160px',
      marginTop: '4px'
    },
    Container: {
      textAlign: 'center',
      display: "flex",
      flexDirection: "row",
    },
    price: {
      color: '#e85831',
      fontWeight: '600',
      fontSize: "20px"
    },
    loader: {
      position: 'absolute',
      top: '5px',
      left: '31%',
      color: 'white',
      width: '30px !important',
      height: '30px !important'
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
      fontWeight: '700',
      color: '#00669b',
      fontSize: "25px",
      marginBottom: "15px",

    },
    Typography2: {
      fontSize: '15px',
      fontWeight: '400',
      fontFamily: 'inherit',
      color: 'cbd0d6',
      marginBottom: "10px",

    },
    remove: {
      padding: '2%',
      width: '100px',
      height: '40px',
      backgroundColor: '#808080',
      color: 'white',
      marginRight: "50px",
      textTransform: 'initial',
      "&:hover": {
        backgroundColor: 'red'
      }

    },
    buttons: {
      width: "450px",
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },


  })
)

export default WishlistCard;