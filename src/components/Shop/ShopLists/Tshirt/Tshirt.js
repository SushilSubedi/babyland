import React, { useEffect, useState } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { tshirtHandler } from "./TShirtRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';
import FilterItems from '../../FilterItems/FilterItems';

const Tshirt = () => {
  const data = useSelector((state) => state.TShirtRedux.data) || [];
  const dispatch = useDispatch();
  const [price,setPrice] = useState('');
  const [Data,setData] = useState([]);


  useEffect(() => {
    if (data.length === 0) {
      dispatch(tshirtHandler());
    }
  },[]);

  useEffect(()=>{
    setData(data);
  },[data])

  const sortPrice = (a,b) => {
    if(price === 'low'){
      if(a.value < b.value){
        return -1;
      }else if(a.value > b.value){
        return 1;
      }else{
        return 0;
      }
    }else if(price === 'high') {
      if(a.value < b.value){
        return 1;
      }else if(a.value > b.value){
        return -1;
      }else{
        return 0;
      }
    }
     
  }

  let shoplist = (<div><FilterItems valued={price} onchanged={(e)=> setPrice(e.target.value)}/><ShopCardList Data={Data} /></div>)
  
  if(data.length === 0){
    shoplist =(<div style={{width:'900px'}}><Loader/></div>)
  }

 useEffect(()=>{
  const sortData = data.slice();
  if(price === 'Mixed'){
    setData(data);
  }
  if(price !== 'low' && price !== 'high') return;
  setData(sortData.sort(sortPrice));
},[price]);


  return (
    <div>
        {shoplist}
    </div>
  );
};
export default Tshirt;
