import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../../GlobalComponents/card';
import { useSelector } from 'react-redux';


const CardList = (props) => {


  const cartData = useSelector(state => state.CartRedux.data) || [];

  return (
    <div >
      <Grid container >
        {cartData.map((item, index) => (
          <Grid item md={4} key={index} spacing={3}>
            <Card
              name={item.name}
              description={item.description}
              price={item.value}
              img={item.img}

            />
          </Grid >
        ))}

      </Grid >

    </div>
  )
}

export default CardList;