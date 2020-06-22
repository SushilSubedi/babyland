import React,{useState,useEffect} from 'react';
import ShopCardList from '../ShopCardList/ShopCardList';
import fire from '../../../../config/fire';
import { cosmeticHandler } from './CosmeticReducer/action';
import { useDispatch } from 'react-redux';

const Cosmetic = (props) =>{
    const [data,setData] = useState([]);
    let dataArray = [];
    const dispatch = useDispatch();

    useEffect(()=>{
        fire.database().ref().child('Cosmetic').once('value').then(response =>{
            for(let i= 0; i < response.val().length; i ++ ){
                dataArray.push(response.val()[i]);
            }
            setData(dataArray);
        });
    },[])

    useEffect(()=>{
        dispatch(cosmeticHandler());
    },[])


return(
    <div>
        <ShopCardList Data={data}/>
    </div>
)
}
export default Cosmetic;