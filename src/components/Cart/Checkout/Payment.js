import React,{ useState,useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import axios from 'axios';

const Payment = (props) => {
    const [paidFor,setPaidFor] = useState(false);
    // const [loaded,setLoaded] = useState(false);
    const [error,setError] = useState(null);
    const [prices,setPrices] = useState(null);
    const { price } = props;

    useEffect(() => {
        function pay(){
            window.paypal.Button.render({
                env: 'sandbox', // Or 'production'
                // Set up the payment:
                // 1. Add a payment callback
                payment: function async(data, actions) {
                  // 2. Make a request to your server
                  
                  console.log("price",price)

                  return actions.request.post('http://localhost:5001/babyland-2b68b/us-central1/app/pay',{
                      total: 420

                    })
                    .then(function(res) {
                      // 3. Return res.id from the response
                      return res;
                    });
                },
                // Execute the payment:
                // 1. Add an onAuthorize callback
                onAuthorize: function(data, actions) {
                  // 2. Make a request to your server
                  return actions.request.post('http://localhost:5001/babyland-2b68b/us-central1/app/success',{
                      total:  420,
                      paymentID: data.paymentID,
                      payerID: data.payerID
                  })
                    .then(function(res) {
                      // 3. Show the buyer a confirmation message.
                      setPaidFor(true)
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
                 <div style={{display:'flex',width:'100%',flexDirection:'column'}}>
                     <Typography variant="h6" style={{ fontFamily: 'inherit',fontWeight: '500',color: '#00669b'}}>we provide a secure and safe way for payment</Typography>
                     <Typography style={{fontFamily:'inherit',color:'black'}}>Online Payment:</Typography>
                    <div id="paypal-button-container"></div>
                    <FormControl component="fieldset">
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Cash On Delivery"
                            labelPlacement="end"
                        />
                    </FormControl>
                </div>
             )

         }
         
         {/* <button onClick={paymentHandler}>PayPal</button> */}
         </Container>
     </div>
 )   
}

export default Payment;