import fire from "../../../../../config/fire";
import { imageUrlHandler } from "../../Shampoo/ShampooRedux/action";

export const TOY_START = " TOY_START";
export const TOY_SUCCESS = " TOY_SUCCESS";
export const TOY_FAIL = " TOY_FAIL";

// function call in redux

export const toyStart = () => {
  return {
    type: TOY_START,
  };
};

export const toySuccess = (data) => {
  // console.log("s", data);
  return {
    type: TOY_SUCCESS,
    data: data,
  };
};

export const toyError = (error) => {
  return {
    type: toyError,
    error: error,
  };
};

export const toyHandler = () => {
  return (dispatch) => {
    dispatch(toyStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("Toys")
      .once("value")
      .then((response) => {
        response.val().forEach((element) => {
          const promise = imageUrlHandler(element.img)
            .then((url) => {
              return url;
            })
            .catch((error) => {
              dispatch(toyError(error));
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
                dispatch(toySuccess(data));
              }
            })
            .catch((error) => dispatch(toyError(error)));
        });
      })
      .catch((error) => {
        dispatch(toyError(error));
      });
  };
};
