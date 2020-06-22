import * as actionType from "./action";

const initialState = {
  loading: false,
  name: "",
  description: "",
  img: "",
  price: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.COSMETIC_START:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionType.COSMETIC_SUCESS:
      return {
        ...state,
        name: action.name,
        description: action.description,
        img: action.img,
        price: action.price,
        loading: false,
      };

    case actionType.COSMETIC_FAIL:
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
