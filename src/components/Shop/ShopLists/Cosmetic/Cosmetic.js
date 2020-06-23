import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import fire from "../../../../config/fire";
import { cosmeticHandler } from "./CosmeticRedux/action";
import { useDispatch, useSelector } from "react-redux";

const Cosmetic = (props) => {
  const data = useSelector((state) => state.CosmeticRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cosmeticHandler());
    console.log("run");
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Cosmetic;
