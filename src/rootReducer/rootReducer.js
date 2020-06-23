import { combineReducers } from "redux";
import AuthRedux from "../components/Authentication/AuthRedux/AuthRedux";
import CosmeticRedux from "../components/Shop/ShopLists/Cosmetic/CosmeticRedux/CosmeticRedux";
import DiaperReducer from "../components/Shop/ShopLists/Diaper/DiaperRedux/DiaperRedux";
const rootReducer = combineReducers({
  AuthRedux,
  CosmeticRedux,
  DiaperReducer,
});

export default rootReducer;
