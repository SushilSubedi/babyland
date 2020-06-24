import fire from "../../../../../config/fire";

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

let name, desc, value, img;

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
        for (let i = 0; i < response.val().length; i++) {
          fire
            .storage()
            .refFromURL(response.val()[i].img)
            .getDownloadURL()
            .then((image) => {
              imgList.push(image);
            })
            .catch((error) => {
              dispatch(toyError(error));
            });
          setTimeout(() => {
            name = response.val()[i].name;
            desc = response.val()[i].description;
            value = response.val()[i].value;
            img = imgList[i];
            data.push({ name, desc, value, img });
            if (i === response.val().length - 1) {
              dispatch(toySuccess(data));
            }
          }, 3000);
        }
      })
      .catch((error) => {
        dispatch(toyError(error));
      });
  };
};
