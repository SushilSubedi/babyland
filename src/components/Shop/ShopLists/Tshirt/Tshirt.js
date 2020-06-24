import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { tshirtHandler } from "./TShirtRedux/action";
import { useDispatch, useSelector } from "react-redux";

const Tshirt = () => {
  const data = useSelector((state) => state.TShirtRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(tshirtHandler());
    }
  }, []);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Tshirt;
