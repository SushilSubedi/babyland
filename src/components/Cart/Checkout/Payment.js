import React,{ useState,useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useSelector } from 'react-redux';

const Payment = (props) => {
    const [paidFor,setPaidFor] = useState(false);
    const [error,setError] = useState(null);
    const { price,line1,line2,city,phone,postalCode } = props;

    const cartData = useSelector(state => state.CartRedux.data) || [];
    const user = localStorage.getItem('user')

    useEffect(() => {
        console.log(cartData,"cartData")
    },[cartData])


    useEffect(() => {
        function pay(){
            window.paypal.Button.render({
                env: 'sandbox', // Or 'production'
                client: {
                    sandbox: "AS43awnsEbh6ueuE4g_3gQmBohsQgvFBeLOkjl3gjHgAvyzsQK1EWGIZatUhKqewmuRvNOHRp7CaqyYn"
                },
                // Set up the payment:
                // 1. Add a payment callback
                payment: function (data, actions) {
                  // 2. Make a request to your server

                  return actions.payment.create({
                      payment: {
                          transactions: [
                              {
                                  amount: {
                                        total:price,
                                        currency: "INR",
                                  },
                                  item_list: {
                                    items: cartData,                  
                                      shipping_address: {
                                            recipient_name: user,
                                            line1: line1,
                                            line2: line2,
                                            city:city,
                                            state:city,
                                            phone:phone,
                                            postal_code:postalCode,
                                            country_code: "IN"
                                        }
                                  }
                              },
                          ]
                      }
                  });
                },
                // Execute the payment:
                // 1. Add an onAuthorize callback
                onAuthorize: function (data, actions) {
                    // Get the payment details
                    return actions.payment.get()
                      .then(function (paymentDetails) {
                        // Show a confirmation using the details from paymentDetails
                        // Then listen for a click on your confirm button
                            console.log("p",paymentDetails)
                        document.querySelector('#paypal-button-container')
                          .addEventListener('click', function () {
                            // Execute the payment
                            return actions.payment.execute()
                              .then(function () {
                                // Show a success page to the buyer
                                setPaidFor(true);
                              });
                          });
                      });
                  },
                  onError: function (err) {
                    // Show an error page here, when an error occurs
                    setError(err);
                    console.log(err);
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