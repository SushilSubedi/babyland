import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { cosmeticHandler } from "./CosmeticRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';

const Cosmetic = (props) => {
  const data = useSelector((state) => state.CosmeticRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if(data.length === 0){
      dispatch(cosmeticHandler());
    }
  },[]);

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
export default Cosmetic;
