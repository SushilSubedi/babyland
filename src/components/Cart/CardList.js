import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Card from '../../GlobalComponents/card';
import { useSelector } from 'react-redux';


const CardList = (props) => {


  const cartData = useSelector(state => state.CartRedux.data) || [];
  useEffect(() => {
    console.log("cartdata", cartData);
  }, [cartData]);


  return (
    <Grid item md={12} >
      <Grid container spacing={3} >
        {cartData.map((item, index) => (
          <Grid item md={4} key={index}>
            <Card
              name={item.name}
              description={item.description}
              price={item.value}
              img={item.img}
              PostId={item.postId}

            />
          </Grid >
        ))}

      </Grid >

    </Grid>
  )
}

export default CardList;