import React, { useEffect, useState } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { diaperHandler } from "./DiaperRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';

const Diapers = (props) => {
  const data = useSelector((state) => state.DiaperRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(diaperHandler());
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
