import React,{useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../components/Authentication/AuthRedux/action';
import { useDispatch } from 'react-redux';

const Logout = (props) => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(logout());
    },[])

    return <Redirect to ='/' />
}

export default Logout;