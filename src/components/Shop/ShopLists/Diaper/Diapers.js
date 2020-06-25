import React, { useEffect, useState } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import fire from "../../../../config/fire";
import { diaperHandler } from "./DiaperRedux/action";
import { useDispatch, useSelector } from "react-redux";
const Diapers = (props) => {
  const data = useSelector((state) => state.DiaperReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
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
