import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { pregnancykitHandler } from "./PregnancykitsRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';

const Pregancykit = (props) => {
  const data = useSelector((state) => state.PregnancyKitsRedux.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(pregnancykitHandler());
    }
  }, []);

  let shoplist = <ShopCardList Data={data} />
  
  if(data.length === 0){
    shoplist = <Loader/>
  }
 
  return (
    <div>
        {shoplist}
    </div>
  );
};
export default Pregancykit;
