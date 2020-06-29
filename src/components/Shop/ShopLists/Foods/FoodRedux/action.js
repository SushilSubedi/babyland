import fire from "../../../../../config/fire";
import { imageUrlHandler } from "../../Shampoo/ShampooRedux/action";

export const FOOD_START = "FOOD_START";
export const FOOD_SUCCESS = "FOOD_SUCCESS";
export const FOOD_FAIL = "FOOD_FAIL";

// function call in redux

export const foodStart = () => {
  return {
    type: FOOD_START,
  };
};

export const foodSuccess = (data) => {
  // console.log("s", data);
  return {
    type: FOOD_SUCCESS,
    data: data,
  };
};

export const foodError = (error) => {
  return {
    type: foodError,
    error: error,
  };
};

export const foodHandler = () => {
  return (dispatch) => {
    dispatch(foodStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("Food")
      .once("value")
      .then((response) => {
        response.val().forEach((element) => {
          const promise = imageUrlHandler(element.img)
            .then((url) => {
              return url;
            })
            .catch((error) => {
              dispatch(foodError(error));
            });
          imgList.push(promise);
          Promise.all(imgList)
            .then((items) => {
              const dataCollection = {
                name: element.name,
                description: element.description,
                value: element.value,
                img: items[items.length - 1],
              };
              data.push(dataCollection);
              if (data.length === response.val().length) {
                dispatch(foodSuccess(data));
              }
            })
            .catch((error) => dispatch(foodError(error)));
        });
      })
      .catch((error) => {
        dispatch(foodError(error));
      });
  };
};
