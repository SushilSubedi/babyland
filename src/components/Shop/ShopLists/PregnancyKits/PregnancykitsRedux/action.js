import fire from "../../../../../config/fire";
import { imageUrlHandler } from "../../Shampoo/ShampooRedux/action";

export const PREGNANCYKIT_START = "PREGANCYKIT_START";
export const PREGNANCYKIT_SUCCESS = "PREGANCYKIT_SUCCESS";
export const PREGNANCYKIT_FAIL = "PREGANCYKIT_FAIL";

// function call in redux

export const pregnancykitStart = () => {
  return {
    type: PREGNANCYKIT_START,
  };
};

export const pregnancykitSuccess = (data) => {
  // console.log("s", data);
  return {
    type: PREGNANCYKIT_SUCCESS,
    data: data,
  };
};

export const pregnancykitError = (error) => {
  return {
    type: pregnancykitError,
    error: error,
  };
};

export const pregnancykitHandler = () => {
  return (dispatch) => {
    dispatch(pregnancykitStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("PregnancyKit")
      .once("value")
      .then((response) => {
        response.val().forEach((element) => {
          const promise = imageUrlHandler(element.img)
            .then((url) => {
              return url;
            }).catch((error) => {
              dispatch(pregnancykitError(error));
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
                dispatch(pregnancykitSuccess(data));
              }
            }).catch((error) => dispatch(pregnancykitError(error)));
        });
      }).catch((error) => {
        dispatch(pregnancykitError(error));
      });
  };
};
