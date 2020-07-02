import React, { useEffect, useState } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { toyHandler } from "./ToysRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';

const Toys = (props) => {
  const data = useSelector((state) => state.ToyRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(toyHandler());
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
export default Toys;
