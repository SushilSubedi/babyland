import * as actionType from "./action";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DEVELOPER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.DEVELOPER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionType.DEVELOPER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
