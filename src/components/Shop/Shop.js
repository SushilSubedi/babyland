import React,{useEffect} from "react";
import ShopLists from "./ShopLists/ShopLists";
import { fetchWishlistData } from '../Account/Wishlist/WishlistRedux/action';
import { fetchCartData } from '../Cart/CartRedux/action';
import { useDispatch,useSelector } from 'react-redux';
import Footer from '../Footer/footer';

const Shop = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.CartRedux.data) || [];
  const AuthData = useSelector((state) => state.AuthRedux.userID) || [];
  const wishlistData = useSelector((state) => state.WishlistRedux.data) || [];
  
  useEffect(() => {
    if(wishlistData.length  === 0 && AuthData.length === 0){
      dispatch(fetchWishlistData());
    }
    if(cartData.length  === 0 && AuthData.length === 0){
      dispatch(fetchCartData());
    }
  },[cartData,wishlistData,dispatch,AuthData.length])
  return (
    <div>
      <ShopLists />
    </div>
  );
}
export default Shop;
