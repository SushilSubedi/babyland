import React from 'react';
import { Typography, Box, Container, Divider, Paper, Button } from '@material-ui/core';
import { makeStyles, createStyles }
  from '@material-ui/core/styles';

const allitems = () => {

  const classes = UseStyles();

  return (
    <Box component={Paper} className={classes.box}>
      <Container className={classes.container}>
        <div className={classes.Header}>
          <Typography style={{ fontSize: "20px" }}>Items Price</Typography>

        </div>
        <Divider variant="middle" />

        <div className={classes.Items}>
          <Typography  >Items Price</Typography>

        </div>

        <div className={classes.Delivery}>
          <Typography  >Delivery Price</Typography>

        </div>

        <Divider variant="middle" />

        <div className={classes.Total}>
          <Typography style={{ fontSize: "20px" }}>Total Price</Typography>

        </div>
        <Button
          variant="contained"
          className={classes.button}>

          Checkout
        </Button>

      </Container>
    </Box>

  )
}

const UseStyles = makeStyles(
  createStyles({
    box: {
      width: "500px",
      height: "300px"
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center"
    },

    Header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      color: "#00669b",
      wordSpacing: "25px"


    },
    Items: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      wordSpacing: "38px",
      position: "relative",
      right: "6px",
      fontSize: "5px",
      marginTop: "20px"
    },

    Delivery: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      wordSpacing: "20px",
      fontSize: "5px",
      position: "relative",
      right: "6px",
      marginTop: "20px"
    },

    Total: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      wordSpacing: "30px",
      position: "relative",
      right: "6px",
      marginTop: "20px",
      color: "rgb(232, 88, 49)",
    },
    button: {
      position: "relative",
      left: "140px",
      top: "50px",
      width: "150px",
      color: 'black',
      fontFamily: "sans-serif",
      backgroundColor: 'pink',
      textTransform: 'initial',
      fontSize: "20px",
      '&:hover': {
        backgroundColor: 'hotpink'
      }
    },

  })
);








export default allitems;