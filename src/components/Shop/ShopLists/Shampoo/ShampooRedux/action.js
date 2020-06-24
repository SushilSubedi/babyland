import fire from "../../../../../config/fire";

export const SHAMPOO_START = "SHAMPOO_START";
export const SHAMPOO_SUCCESS = "SHAMPOO_SUCCESS";
export const SHAMPOO_FAIL = "SHAMPOO_FAIL";

// function call in redux

export const shampooStart = () => {
  return {
    type: SHAMPOO_START,
  };
};

export const shampooSuccess = (data) => {
  // console.log("s", data);
  return {
    type: SHAMPOO_SUCCESS,
    data: data,
  };
};

export const shampooError = (error) => {
  return {
    type: shampooError,
    error: error,
  };
};

let name, desc, value, img;

export const shampooHandler = () => {
  return (dispatch) => {
    dispatch(shampooStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("Shampoo")
      .once("value")
      .then((response) => {
        for (let i = 0; i < response.val().length; i++) {
          fire
            .storage()
            .refFromURL(response.val()[i].img)
            .getDownloadURL()
            .then((image) => {
              imgList.push(image);
            })
            .catch((error) => {
              dispatch(shampooError(error));
            });
          setTimeout(() => {
            name = response.val()[i].name;
            desc = response.val()[i].description;
            value = response.val()[i].value;
            img = imgList[i];
            data.push({ name, desc, value, img });
            if (i === response.val().length - 1) {
              dispatch(shampooSuccess(data));
            }
          }, 3000);
        }
      })
      .catch((error) => {
        dispatch(shampooError(error));
      });
  };
};
