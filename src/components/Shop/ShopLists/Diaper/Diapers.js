import React, { useEffect, useState } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { DiaperHandler } from "./DiaperRedux/action";
import { useDispatch, useSelector } from "react-redux";
const Diapers = (props) => {
  const data = useSelector((state) => state.DiaperReducer.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(DiaperHandler());
    }
  },[]);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Diapers;
