import React, { useEffect, useState } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { toyHandler } from "./ToysRedux/action";
import { useDispatch, useSelector } from "react-redux";

const Toys = (props) => {
  const data = useSelector((state) => state.ToyRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(toyHandler());
    }
  }, []);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Toys;
