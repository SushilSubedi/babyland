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
let name, desc, value;
let data = [];
export const cosmeticHandler = () => {
  return (dispatch) => {
    dispatch(cosmeticStart());

    fire
      .database()
      .ref()
      .child("Cosmetic")
      .once("value")
      .then((response) => {
        for (let i = 0; i < response.val().length; i++) {
          console.log("fake", i);
          
        }
        // console.log("oye", data);
      })
      .catch((error) => {
        dispatch(cosmeticError(error));
      });
  };
};


export const imgHandler =(nam,description,val,image)=>{
  return {
   
    fire.storage().refFromURL(image).getDownloadURL().then((img) => {
        name = nam
        desc = description
        value = val

        data.push({ nam, description, val, img });
        console.log("img", img);

       
      })
      .catch((error) => {
        dispatch(cosmeticError(error));
      });
      dispatch(cosmeticSuccess(data));

  }
}
