import fire from "../../../../../config/fire";

export const COSMETIC_START = "COSMETIC_START";
export const COSMETIC_SUCCESS = "COSMETIC_SUCCESS";
export const COSMETIC_FAIL = "COSMETIC_FAIL";

// function call in redux

export const cosmeticStart = () => {
  return {
    type: COSMETIC_START,
  };
};

export const cosmeticSuccess = (data) => {
  // console.log("s", data);
  return {
    type: COSMETIC_SUCCESS,
    data: data,
  };
};

export const cosmeticError = (error) => {
  return {
    type: cosmeticError,
    error: error,
  };
};

let name, desc, value,img;

export const cosmeticHandler = () => {
  return (dispatch) => {
    dispatch(cosmeticStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("Cosmetic")
      .once("value")
      .then((response) => {
        for (let i = 0; i < response.val().length; i++) {
          fire.storage().refFromURL(response.val()[i].img).getDownloadURL().then((image) => {
            imgList.push(image);
          })
          .catch((error) => {
            dispatch(cosmeticError(error));
          });
          setTimeout(()=>{
            name = response.val()[i].name
            desc = response.val()[i].description
            value = response.val()[i].value
            img = imgList[i]
            data.push({ name, desc, value, img });
            if( i === (response.val().length-1)) {
              dispatch(cosmeticSuccess(data));
            }
          },3000);
        
        }
      })
      .catch((error) => {
        dispatch(cosmeticError(error));
      });
  };
};



