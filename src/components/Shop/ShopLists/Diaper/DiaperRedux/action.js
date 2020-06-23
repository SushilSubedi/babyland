import fire from "../../../../../config/fire";

export const DIAPER_START = "COSMETIC_START";
export const DIAPER_SUCCESS = "COSMETIC_SUCCESS";
export const DIAPER_FAIL = "COSMETIC_FAIL";

// function call in redux

export const diaperStart = () => {
  return {
    type: DIAPER_START,
  };
};

export const diaperSuccess = (data) => {
  console.log("s", data);
  return {
    type: DIAPER_SUCCESS,
    data: data,
  };
};

export const diaperError = (error) => {
  return {
    type: diaperError,
    error: error,
  };
};

export const diaperHandler = () => {
  return (dispatch) => {
    dispatch(diaperStart());
    let name, desc, value;
    let data = [];
    fire
      .database()
      .ref()
      .child("Diaper")
      .once("value")
      .then((response) => {
        for (let i = 0; i < response.val().length; i++) {
          fire
            .storage()
            .refFromURL(response.val()[i].img)
            .getDownloadURL()
            .then((img) => {
              name = response.val()[i].name;
              desc = response.val()[i].description;
              value = response.val()[i].value;

              data.push({ name, desc, value, img });

              if (i < 1) {
                dispatch(diaperSuccess(data));
              }
            })
            .catch((error) => {
              dispatch(diaperError(error));
            });
        }
      })
      .catch((error) => {
        dispatch(diaperError(error));
      });
  };
};
