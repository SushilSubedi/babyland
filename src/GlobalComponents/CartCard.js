import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Box, Container, Typography, Paper, FormControl, InputLabel, Select } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import fire from "../config/fire";
import { cartDeleteData } from "../components/Cart/CartRedux/action";
import { useDispatch } from "react-redux";
import { cartQuantityData } from "../components/Cart/CartRedux/action";
import MenuItem from '@material-ui/core/MenuItem';

const CartCard = (props) => {
  const classes = useStyles();
  const { name, description, img, price, PostId, id, quantity } = props;
  const dispatch = useDispatch();
  const [quantityValue, setQuantityValue] = useState(1);




  const deletedata = () => {
    const userId = localStorage.getItem('userID');
    fire.database().ref(`/cart/${userId}/${PostId}`).set(null).then(doc =>
      dispatch(cartDeleteData(PostId))
    )
  }

  const quantityData = (e) => {
    setQuantityValue(e)
    const properties = {
      name: name,
      description: description,
      img: img,
      value: price,
      postId: PostId,
      id: id,
      quantity: e
    };
    const userId = localStorage.getItem('userID');
    fire.database().ref(`/cart/${userId}/${PostId}`).set(properties).then(doc =>
      dispatch(cartQuantityData(properties))
    )
  }

  useEffect(() => {
    if (quantity > 1) {
      setQuantityValue(quantity);
    }
  }, [quantityValue, quantity])

  return (
    <Box component={Paper} className={classes.card}>
      <Container className={classes.Container}>
        <img className={classes.img} src={img} alt="simple img" />

        <div style={{ padding: '2% 0%' }}>
          <Typography variant="h6" className={classes.Typography1}>{name}</Typography>
          <Typography className={classes.Typography2}>{description}</Typography>
        </div>

        <div>
          <Typography variant="h6" style={{ color: '#e85831', fontWeight: '700' }}>Rs{price}</Typography>

          <div className={classes.cartWishlist}>
            <div style={{ marginTop: "5%" }}>
              <DeleteIcon onClick={deletedata} className={classes.remove} />
            </div>
            <div>

              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Qty</InputLabel>
                <Select onChange={(e) => quantityData(e.target.value)} value={quantity}
                  inputProps={{
                    id: '1234',
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>

            </div>
          </div>
        </div>
      </Container>
    </Box>
  )
}
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      display: 'flex',
      flowDirection: 'column',
      width: '320px',
      flexWrap: "wrap",
      overflow: "hidden",

      marginTop: "9%",
      minHeight: '320px',
      justifyContent: 'center',
      padding: '2% 1% 4% 1%',
      alignItems: 'center',

      border: '1px solid rgba(0,0,0,0.1)',
      boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)'
    },
    img: {
      width: '150px',
      height: '140px',
      marginTop: '4px'
    },
    Container: {
      textAlign: 'center',

    },
    cartWishlist: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    button: {
      padding: '2%',
      width: '94px',
      height: '38px',
      backgroundColor: 'hotpink',
      color: 'white',
      textTransform: 'initial',
      "&:hover": {
        backgroundColor: '#fc03d7'
      }
    },
    Typography1: {
      fontFamily: 'inherit',
      fontWeight: '700',
      color: '#00669b'
    },
    Typography2: {
      fontSize: '14px',
      fontWeight: '300',
      fontFamily: 'inherit',
      color: 'cbd0d6'
    },
    remove: {
      fontSize: "35px",
      color: "#a6a1a1",

      "&:hover": {
        color: "red"
      }

    }


  })
)


export default CartCard;