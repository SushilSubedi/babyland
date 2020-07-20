import React, { useState } from 'react';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import FilterDropDown from './FilterDropDown';


const Card = (props) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState('');

  return (
    <Box component={Paper} className={classes.card}>
      <Container className={classes.Container}>

        <div style={{ padding: '2% 0%' }}>
          <Typography variant="h6" className={classes.Typography1}>name</Typography>
          <Typography className={classes.Typography2}>description</Typography>
        </div>
        <div>
          <Typography variant="h6" style={{ color: '#e85831', fontWeight: '700' }}>Rs</Typography>
          <div className={classes.cartWishlist}>
            <div>

            </div>
            <div>
              <Button className={classes.remove} > remove</Button>

            </div>
            <FormControl required className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Qty</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                // value={age}
                // onChange={handleChange}
                className={classes.selectEmpty}
              >
                <MenuItem value="">

                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>

            </FormControl>

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
      top: "120px",
      left: "200px"

    }



  })
)


export default Card; 