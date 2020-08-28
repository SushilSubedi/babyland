import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";


const PayPalBtn = (props) => {
    const { amount, onSuccess, currency } = props;
    return (
        <PayPalButton
        amount={amount}
        currency={currency}
        onSuccess={(details, data) => onSuccess(details, data)}
        options={{
            clientId: "AS43awnsEbh6ueuE4g_3gQmBohsQgvFBeLOkjl3gjHgAvyzsQK1EWGIZatUhKqewmuRvNOHRp7CaqyYn"
          }}
    />
    )
}
export default PayPalBtn;