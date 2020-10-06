import fire from "../../../../../config/fire";
import { imageUrlHandler } from "../../Shampoo/ShampooRedux/action";

export const TSHIRT_START = "TSHIRT_START";
export const TSHIRT_SUCCESS = "TSHIRT_SUCCESS";
export const TSHIRT_FAIL = "TSHIRT_FAIL";

// function call in redux

export const tshirtStart = () => {
  return {
    type: TSHIRT_START,
  };
};

export const tshirtSuccess = (data) => {
  // console.log("s", data);
  return {
    type: TSHIRT_SUCCESS,
    data: data,
  };
};

export const tshirtError = (error) => {
  return {
    type: tshirtError,
    error: error,
  };
};

export const tshirtHandler = () => {
  return (dispatch) => {
    dispatch(tshirtStart());

    const data = [];
    const imglist = [];
    fire.database().ref().child("TShirt").once("value").then((response) => {
        response.val().forEach((element) => {
          const promise = imageUrlHandler(element.img).then((url) => {
              return url;
            }).catch((error) => {
              dispatch(tshirtError(error));
            });
          imglist.push(promise);
          Promise.all(imglist)
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
                dispatch(tshirtSuccess(data));
              }
            })
            .catch((err) => dispatch(tshirtError(err)));
        });
      })
      .catch((error) => {
        dispatch(tshirtError(error));
      });
  };
};
