import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { foodHandler } from "./FoodRedux/action";
import { useDispatch, useSelector } from "react-redux";

const Food = (props) => {
  const data = useSelector((state) => state.FoodRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(foodHandler());
    }
  }, []);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Food;
