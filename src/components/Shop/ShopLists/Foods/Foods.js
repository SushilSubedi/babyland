import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { foodHandler } from "./FoodRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';

const Food = (props) => {
  const data = useSelector((state) => state.FoodRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(foodHandler());
    }
  }, []);

  let shoplist = <ShopCardList Data={data} />
  
  if(data.length === 0){
    shoplist = <Loader/>
  }
 
  return (
    <div>
        {shoplist}
    </div>
  );
};
export default Food;
