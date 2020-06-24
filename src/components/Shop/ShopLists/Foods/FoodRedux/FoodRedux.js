import * as actionType from "./action";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FOOD_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.FOOD_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionType.FOOD_FAIL:
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
