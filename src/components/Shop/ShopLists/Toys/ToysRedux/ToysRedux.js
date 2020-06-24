import * as actionType from "./action";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TOY_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.TOY_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionType.TOY_FAIL:
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
