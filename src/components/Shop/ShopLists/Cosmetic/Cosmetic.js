import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { cosmeticHandler } from "./CosmeticRedux/action";
import { useDispatch, useSelector } from "react-redux";

const Cosmetic = (props) => {
  const data = useSelector((state) => state.CosmeticRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if(data){
      dispatch(cosmeticHandler());
    }
  },[]);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Cosmetic;
