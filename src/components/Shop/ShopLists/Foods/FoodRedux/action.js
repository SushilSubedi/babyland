import fire from "../../../../../config/fire";

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

let name, description, value, img;

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
        for (let i = 0; i < response.val().length; i++) {
          fire
            .storage()
            .refFromURL(response.val()[i].img)
            .getDownloadURL()
            .then((image) => {
              imgList.push(image);
            })
            .catch((error) => {
              dispatch(foodError(error));
            });
          setTimeout(() => {
            name = response.val()[i].name;
            description = response.val()[i].description;
            value = response.val()[i].value;
            img = imgList[i];
            data.push({ name, description, value, img });
            if (i === response.val().length - 1) {
              dispatch(foodSuccess(data));
            }
          }, 3000);
        }
      })
      .catch((error) => {
        dispatch(foodError(error));
      });
  };
};
