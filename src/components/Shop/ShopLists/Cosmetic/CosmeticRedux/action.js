import fire from "../../../../../config/fire";
import { imageUrlHandler } from "../../Shampoo/ShampooRedux/action";

export const COSMETIC_START = "COSMETIC_START";
export const COSMETIC_SUCCESS = "COSMETIC_SUCCESS";
export const COSMETIC_FAIL = "COSMETIC_FAIL";

// function call in redux

export const cosmeticStart = () => {
  return {
    type: COSMETIC_START,
  };
};

export const cosmeticSuccess = (data) => {
  // console.log("s", data);
  return {
    type: COSMETIC_SUCCESS,
    data: data,
  };
};

export const cosmeticError = (error) => {
  return {
    type: COSMETIC_FAIL,
    error: error,
  };
};

export const cosmeticHandler = () => {
  return (dispatch) => {
    dispatch(cosmeticStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("Cosmetic")
      .once("value")
      .then((response) => {
        response.val().forEach((element) => {
          const promise = imageUrlHandler(element.img)
            .then((url) => {
              return url;
            })
            .catch((error) => {
              dispatch(cosmeticError(error));
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
              if (items.length === response.val().length) {
                dispatch(cosmeticSuccess(data));
              }
            })
            .catch((error) => dispatch(cosmeticError(error)));
        });
      })
      .catch((error) => {
        dispatch(cosmeticError(error));
      });
  };
};
