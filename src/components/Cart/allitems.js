import React from 'react';
import { Typography, Box, Container, Divider, Paper, Button } from '@material-ui/core';
import { makeStyles, createStyles }
  from '@material-ui/core/styles';


const allitems = (props) => {

  const classes = UseStyles();
  const { CartData } = props;





  return (
    <Box component={Paper} className={classes.box}>
      <Container className={classes.container}>
        <div className={classes.Header}>
          <Typography style={{ fontSize: "20px" }}>Items Price</Typography>

        </div>
        <Divider variant="middle" />
        {CartData.map((item, index) => (
          <div className={classes.Items}>
            <Typography  >{item.name} </Typography>
            <Typography > RS{item.value}</Typography>

          </div>
        ))}


        <div className={classes.Delivery}>
          <Typography  >Delivery </Typography>
          <Typography  > price</Typography>

        </div>

        <Divider variant="middle" />

        <div className={classes.Total}>
          <Typography style={{ fontSize: "20px" }}>Total </Typography>
          <Typography style={{ fontSize: "20px" }}>price </Typography>

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
      width: "450px",
      maxheight: "900px",
      minWidth: "100px",
      minHeight: "300px"
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
      wordSpacing: "80px"


    },
    Items: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      fontSize: "5px",
      marginTop: "20px"
    },

    Delivery: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      fontSize: "5px",
      marginTop: "20px"
    },

    Total: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "20px",
      color: "rgb(232, 88, 49)",
    },
    button: {
      margin: "8% 0% 3% 25%",
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