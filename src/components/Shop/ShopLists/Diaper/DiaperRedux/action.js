import fire from "../../../../../config/fire";

export const DIAPER_START = "DIAPER_START";
export const DIAPER_SUCCESS = "DIAPER_SUCCESS";
export const DIAPER_FAIL = "DIAPER_FAIL";

// function call in redux
export const DiaperStart = () => {
  return {
    type: DIAPER_START,
  };
};

export const DiaperSuccess = (data) => {
  return {
    type: DIAPER_SUCCESS,
    data: data,
  };
};

export const DiaperError = (error) => {
  return {
    type: DIAPER_FAIL,
    error: error,
  };
};

let name, desc, value,img;
export const DiaperHandler = () => {
  return (dispatch) => {
    dispatch(DiaperStart());
    const data = [];
    const imgList = [];
    fire
      .database()
      .ref()
      .child("Diaper")
      .once("value")
      .then((response) => {
        for (let i = 0; i < response.val().length; i++) {
          fire.storage().refFromURL(response.val()[i].img).getDownloadURL().then((image) => {
            imgList.push(image);
          })
          .catch((error) => {
            dispatch(DiaperError(error));
          });
          setTimeout(()=>{
            name = response.val()[i].name
            desc = response.val()[i].description
            value = response.val()[i].value
            img = imgList[i]
            data.push({ name, desc, value, img });
            if( i === (response.val().length-1)) {
              dispatch(DiaperSuccess(data));
            }
          },3000);
        
        }
      })
      .catch((error) => {
        dispatch(DiaperError(error));
      });
  };
};



