import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { pregnancykitHandler } from "./PregnancykitsRedux/action";
import { useDispatch, useSelector } from "react-redux";

const Pregancykit = (props) => {
  const data = useSelector((state) => state.PregnancyKitsRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(pregnancykitHandler());
    }
  }, []);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Pregancykit;
