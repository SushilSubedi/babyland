import fire from "../../../../../config/fire";

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

let name, desc, value, img;

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
        for (let i = 0; i < response.val().length; i++) {
          fire
            .storage()
            .refFromURL(response.val()[i].img)
            .getDownloadURL()
            .then((image) => {
              imgList.push(image);
            })
            .catch((error) => {
              dispatch(pregnancykitError(error));
            });
          setTimeout(() => {
            name = response.val()[i].name;
            desc = response.val()[i].description;
            value = response.val()[i].value;
            img = imgList[i];
            data.push({ name, desc, value, img });
            if (i === response.val().length - 1) {
              dispatch(pregnancykitSuccess(data));
            }
          }, 3000);
        }
      })
      .catch((error) => {
        dispatch(pregnancykitError(error));
      });
  };
};
