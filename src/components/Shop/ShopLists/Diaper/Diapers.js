import React, { useEffect, useState } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { diaperHandler } from "./DiaperRedux/action";
import { useDispatch, useSelector } from "react-redux";
const Diapers = (props) => {
  const data = useSelector((state) => state.DiaperRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(diaperHandler());
    }
  }, []);
  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Diapers;
