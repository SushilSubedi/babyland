import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { shampooHandler } from "./ShampooRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';

const Diapers = (props) => {
  const data = useSelector((state) => state.ShampooRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(shampooHandler());
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
export default Diapers;
