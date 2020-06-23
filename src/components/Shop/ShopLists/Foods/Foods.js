import React, { useState, useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import fire from "../../../../config/fire";

const Food = (props) => {
  const [data, setData] = useState([]);
  let dataArray = [];

  useEffect(() => {
    fire
      .database()
      .ref()
      .child("Food")
      .once("value")
      .then((response) => {
        for (let i = 0; i < response.val().length; i++) {
          dataArray.push(response.val()[i]);
        }
        setData(dataArray);
      });
  }, []);

  return (
    <div>
      <ShopCardList Data={data} />
    </div>
  );
};
export default Food;
