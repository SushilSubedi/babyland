import React,{ useState,useEffect,useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import axios from 'axios';

const Payment = () => {
    const [paidFor,setPaidFor] = useState(false);
    // const [loaded,setLoaded] = useState(false);
    const [error,setError] = useState(null);
    const paypalRef = useRef();

    const product = {
        name: 'testing product',
        price: 480,
        description: 'product is on sale'
    }

    useEffect(() => {
        function pay(){
            window.paypal.Button.render({
                env: 'sandbox', // Or 'production'
                // Set up the payment:
                style: {
                    height: 50,
                },
                // 1. Add a payment callback
                payment: function(data, actions) {
                  // 2. Make a request to your server
                  return actions.request.post('http://localhost:5001/babyland-2b68b/us-central1/widgets/pay',{total:200})
                    .then(function(res) {
                      // 3. Return res.id from the response
                      return res;
                    });
                },
                // Execute the payment:
                // 1. Add an onAuthorize callback
                onAuthorize: function(data, actions) {
                  // 2. Make a request to your server
                  return actions.request.post('http://localhost:5001/babyland-2b68b/us-central1/widgets/success',{
                      total:200,
                      paymentID: data.paymentID,
                      payerID: data.payerID
                  })
                    .then(function(res) {
                      // 3. Show the buyer a confirmation message.
                      return res;
                    });
                }
              }, '#paypal-button-container');
        }
        pay();
    },[])


 return(
     <div style={{padding:'4px 10%'}}>
         <Container>
         {error && <div>Uh oh, an error occurred! {error.message}</div>}
         {
             paidFor ? (
                 <div>
                     <Typography variant="h1">Congrs your payment successful</Typography>
                </div>
             ): (
                 <div>
                    <div id="paypal-button-container"></div>
                </div>
             )

         }
         {/* <button onClick={paymentHandler}>PayPal</button> */}
         </Container>
     </div>
 )   
}

export default Payment;