import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { shampooHandler } from "./ShampooRedux/action";
import { useDispatch, useSelector } from "react-redux";

const Diapers = (props) => {
  const data = useSelector((state) => state.ShampooRedux.data) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(shampooHandler());
    }
  }, []);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Diapers;
