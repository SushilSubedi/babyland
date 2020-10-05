import React, {useState,useEffect } from "react";
import ShopCardList from "../ShopCardList/ShopCardList";
import { pregnancykitHandler } from "./PregnancykitsRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../../GlobalComponents/Loader';
import FilterItems from '../../FilterItems/FilterItems';

const Pregancykit = (props) => {
  const data = useSelector((state) => state.PregnancyKitsRedux.data) || [];
  const dispatch = useDispatch();
  const [price,setPrice] = useState('');
  const [Data,setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(pregnancykitHandler());
    }
  }, []);

  useEffect(()=>{
    setData(data);
  },[data])

  let shoplist = (<div><FilterItems valued={price} onchanged={(e)=> setPrice(e.target.value)}/><ShopCardList Data={Data} /></div>)
  
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
  if(data.length === 0){
    shoplist = <Loader/>
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
export default Pregancykit;
