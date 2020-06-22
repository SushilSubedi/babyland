import fire from "../../../../config/fire";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const COSMETIC_START = "COSMETIC_START";
export const COSMETIC_SUCCESS = "COSMETIC_SUCCESS ";
export const COSMETIC_FAIL = "COSMETIC_FAIL";

const [data, setData] = useState([]);
let dataArray = [];
const { name, description, img, price } = props;
const dispatch = useDispatch();

const loading = useSelector((state) => state.AuthRedux.loading);

export const cosmeticStart = () => {
  return {
    type: COSMETIC_START,
  };
};

export const cosmeticSucess = () => {
  return {
    type: COSMETIC_SUCCESS,
    name: name,
    description: description,
    img: img,
    price: price,
  };
};

export const cosmeticFail = () => {
  return {
    type: COSMETIC_FAIL,
    error: error,
  };
};

export const cosmetic = () => {
  return (dispatch) => {
    dispatch(cosmeticStart(name, description, img, price));
    fire
      .database()
      .ref()
      .child("Cosmetic")
      .once("value")
      .then((response) => {
        for (let i = 0; i < response.val().length; i++) {
          dataArray.push(response.val()[i]);
        }
        setData(dataArray);
      });

    dispatch(authFail(error.message));
  };
};
