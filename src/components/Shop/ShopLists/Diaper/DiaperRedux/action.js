import fire from "../../../../../config/fire";
import { imageUrlHandler } from "../../Shampoo/ShampooRedux/action";

export const DIAPER_START = "DIAPER_START";
export const DIAPER_SUCCESS = "DIAPER_SUCCESS";
export const DIAPER_FAIL = "DIAPER_FAIL";

// function call in redux
export const diaperStart = () => {
  return {
    type: DIAPER_START,
  };
};

export const diaperSuccess = (data) => {
  // console.log("s", data);
  return {
    type: DIAPER_SUCCESS,
    data: data,
  };
};

export const diaperError = (error) => {
  return {
    type: DIAPER_FAIL,
    error: error,
  };
};

export const diaperHandler = () => {
  return (dispatch) => {
    dispatch(diaperStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("Diaper")
      .once("value")
      .then((response) => {
        response.val().forEach((element) => {
          const promise = imageUrlHandler(element.img)
            .then((url) => {
              return url;
            })
            .catch((error) => {
              dispatch(diaperError(error));
            });
          imgList.push(promise);
          Promise.all(imgList)
            .then((items) => {
              const dataCollection = {
                name: element.name,
                description: element.description,
                value: element.value,
                img: items[items.length - 1],
                id:element.id
              };
              data.push(dataCollection);
              if (data.length === response.val().length) {
                dispatch(diaperSuccess(data));
              }
            })
            .catch((error) => dispatch(diaperError(error)));
        });
      })
      .catch((error) => {
        dispatch(diaperError(error));
      });
  };
};
