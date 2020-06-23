import fire from "../../../config/fire";

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const SET_AUTH_REDIRECT = "SET_AUTH_REDIRECT";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (user, userID, refreshToken) => {
  return {
    type: AUTH_SUCCESS,
    user: user,
    userID: userID,
    refreshToken: refreshToken,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userID");
  return {
    type: AUTH_LOGOUT,
  };
};

export const checkAuthLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

//SignUp
export const auth = (email, password, name) => {
  return (dispatch) => {
    dispatch(authStart());
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: name,
        });
        localStorage.setItem("token", result.user.refreshToken);
        localStorage.setItem("user", result.user.displayName);
        localStorage.setItem("userID", result.user.uid);
        dispatch(authSuccess(name, result.user.uid, result.user.refreshToken));
        // dispatch(checkAuthLogout());
      })
      .catch(function (error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // ...
        dispatch(authFail(error.message));
      });
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem("token", result.user.refreshToken);
        localStorage.setItem("user", result.user.displayName);
        localStorage.setItem("userID", result.user.uid);
        dispatch(
          authSuccess(
            result.user.displayName,
            result.user.uid,
            result.user.refreshToken
          )
        );
      })
      .catch(function (error) {
        dispatch(authFail(error.message));
      });
    // dispatch(checkAuthLogout());
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: SET_AUTH_REDIRECT,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    console.log(user, token);
    if (!token) {
      dispatch(logout());
    } else {
      const userID = localStorage.getItem("userID");
      dispatch(authSuccess(user, userID, token));
      // dispatch(checkAuthLogout());
    }
  };
};
