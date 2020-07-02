import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { tshirtHandler } from "./TShirtRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';

const Tshirt = (props) => {
  const data = useSelector((state) => state.TShirtRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(tshirtHandler());
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
export default Tshirt;
