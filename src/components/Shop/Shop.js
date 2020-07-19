import React,{useEffect} from "react";
import ShopLists from "./ShopLists/ShopLists";
import { fetchWishlistData } from '../Account/Wishlist/WishlistRedux/action';
import { useDispatch,useSelector } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.WishlistRedux.data) || [];
  const AuthData = useSelector((state) => state.AuthRedux.userID) || [];
  
  useEffect(() => {
    if(cartData.length  === 0 && AuthData.length === 0){
      dispatch(fetchWishlistData());
    }
  },[cartData])
  return (
    <div>
      <ShopLists />
    </div>
  );
}
export default Shop;
