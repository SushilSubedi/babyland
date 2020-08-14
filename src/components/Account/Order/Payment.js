import React,{useState} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const Payment = () => {
const [payFor,setPayFor] = useState(null);

const paymentHandler = async() => {
    try {
        const response = await axios.post('');
        console.log("data",response.data);
        setPayFor(response.data);
    }catch(error) {
        console.log('error',error)
    }

}

return(
    <div>
        <Button style={{background:'red'}} onClick={paymentHandler}>Payment</Button>
    </div>
)
};
export default Payment;