import fire from "../../../../../config/fire";

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

let name, description, value, img;

export const tshirtHandler = () => {
  return (dispatch) => {
    dispatch(tshirtStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("TShirt")
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
              dispatch(tshirtError(error));
            });
          setTimeout(() => {
            name = response.val()[i].name;
            description = response.val()[i].description;
            value = response.val()[i].value;
            img = imgList[i];
            data.push({ name, description, value, img });
            if (i === response.val().length - 1) {
              dispatch(tshirtSuccess(data));
            }
          }, 3000);
        }
      })
      .catch((error) => {
        dispatch(tshirtError(error));
      });
  };
};
