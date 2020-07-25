import { combineReducers } from "redux";
import AuthRedux from "../components/Authentication/AuthRedux/AuthRedux";
import CosmeticRedux from "../components/Shop/ShopLists/Cosmetic/CosmeticRedux/CosmeticRedux";
import DiaperRedux from "../components/Shop/ShopLists/Diaper/DiaperRedux/DiaperRedux";
import FoodRedux from "../components/Shop/ShopLists/Foods/FoodRedux/FoodRedux";
import PregnancyKitsRedux from "../components/Shop/ShopLists/PregnancyKits/PregnancykitsRedux/PregnancykitsRedux";
import ShampooRedux from "../components/Shop/ShopLists/Shampoo/ShampooRedux/ShampooRedux";
import ToyRedux from "../components/Shop/ShopLists/Toys/ToysRedux/ToysRedux";
import TShirtRedux from "../components/Shop/ShopLists/Tshirt/TShirtRedux/TShirtRedux";
import WishlistRedux from '../components/Account/Wishlist/WishlistRedux/WishlistRedux';
import CartRedux from '../components/Cart/CartRedux/CartRedux';
import ProfileRedux from '../components/Account/Profile/ProfileRedux/ProfileRedux';


const rootReducer = combineReducers({
  AuthRedux,
  CosmeticRedux,
  DiaperRedux,
  FoodRedux,
  PregnancyKitsRedux,
  ShampooRedux,
  ToyRedux,
  TShirtRedux,
  WishlistRedux,
  CartRedux,
  ProfileRedux
});

export default rootReducer;
