import React, { useState } from 'react';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';




const Card = (props) => {
  const classes = useStyles();


  const { name, age, description, img, price } = props;

  return (
    <Box component={Paper} className={classes.card}>
      <Container className={classes.Container}>

        <div>


          <img className={classes.img} src={img} alt="simple img" />

          <div style={{ padding: '2% 0%' }}>
            <Typography variant="h6" className={classes.Typography1}>{name}</Typography>
            <Typography className={classes.Typography2}>{description}</Typography>
          </div>
          <div>
            <Typography variant="h6" style={{ color: '#e85831', fontWeight: '700' }}>Rs{price}</Typography>
            <div className={classes.cartWishlist}>

              <div>
                <Button className={classes.remove} > remove</Button>

              </div>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Qty</InputLabel>
                <Select


                >
                  <option aria-label="None" value="" />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </Select>
              </FormControl>


            </div>
          </div>
        </div>

      </Container>
    </Box>
  )
}
const useStyles = makeStyles(
  createStyles({

    card: {
      display: 'flex',
      justifyContent: 'column',
      width: '320px',

      minHeight: '320px',
      padding: '2% 1% 4% 1%',
      margin: '1%',
      border: '1px solid rgba(0,0,0,0.1)',
      boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)',
      marginLeft: "300px",

    },
    Container: {
      width: "410px",
    },

    itemslist: {
      display: "flex",
      justifyContent: "space-evenly",
    },




    remove: {
      position: "relative",
      top: "190px",
      right: "20px",
      padding: '2%',
      width: '94px',
      height: '35px',
      backgroundColor: 'hotpink',
      color: 'white',
      textTransform: 'initial',
      "&:hover": {
        backgroundColor: '#fc03d7'
      }


    },

    qty: {
      position: "relative",
      top: "90px",
      left: "50px",


    },
    formControl: {
      position: "relative",
      top: "130px",
      left: "200px"

    }



  })
)


export default Card; 