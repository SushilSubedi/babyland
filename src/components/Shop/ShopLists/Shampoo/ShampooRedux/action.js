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

export const shampooHandler = () => {
  return (dispatch) => {
    dispatch(shampooStart());import fire from "../../../../../config/fire";

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
    
    export const shampooHandler = () => {
      return (dispatch) => {
        dispatch({shampooStart()});
        const data = [];
        const imglist = [];
        fire.database().ref().child("Shampoo").once("value").then((response) => {
          
          response.val().forEach(element => {
            const promise = imageUrlHandler(element.img).then(url => {
              return url;
            }).catch(error =>{
              dispatch(shampooError(error));
            })
            imglist.push(promise);
            Promise.all(imglist).then(items =>{
              const dataCollection = {
                name: element.name,
                description: element.description,
                value: element.value,
                img: items[items.length - 1]
              }
              data.push(dataCollection);
              if(data.length === response.val().length){
                dispatch(shampooSuccess(data));
              }
            }).catch(err =>dispatch(shampooError(err)));
          })
    
        }).catch(error => {
          dispatch(shampooError(error));
        })
      }
    }
    
    
    export const imageUrlHandler = (databaseUrl) => {
      return new Promise((resolve,reject)=> {
        fire.storage().refFromURL(databaseUrl).getDownloadURL().then((url) => {
          resolve(url);
        })
        .catch((error) => {
          reject(error)
        });
      })
    }
    