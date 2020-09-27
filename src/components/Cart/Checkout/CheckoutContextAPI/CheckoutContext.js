
import React from 'react';

const CheckoutContext = React.createContext({
    payment:false,
    setPayment:() => {}
});

export default CheckoutContext;