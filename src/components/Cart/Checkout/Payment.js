import React,{ useState,useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import fire from '../../../config/fire';
import { orderUpdateData } from '../../Account/Order/OrderRedux/action';
import CheckoutContext from './CheckoutContextAPI/CheckoutContext';

const Payment = (props) => {
    const classes = useStyles();
    const [paidFor,setPaidFor] = useState(false);
    const [error,setError] = useState(null);

    const { setPayment } = useContext(CheckoutContext);

    const { price,line1,line2,city,phone,postalCode } = props;

    const dispatch = useDispatch();
    const cartData = useSelector(state => state.CartRedux.data) || [];
    const user = localStorage.getItem('user');

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
                                        details: {
                                            shipping:0,
                                            subtotal:price
                                        }
                                  },
                                  item_list: {                 
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
                            // Execute the payment
                            order(paymentDetails);

                            return actions.payment.execute()
                              .then(function () {
                                // Show a success page to the buyer
                                setPaidFor(true);
                                setPayment(true)
                              });
                      });
                  },
                  onError: function (err) {
                    // Show an error page here, when an error occurs
                    setError(err);
                  }
                 
              }, '#paypal-button-container');
        }
        pay();
        function order(paymentDetails) {
            const userId = localStorage.getItem('userID')
            const newPostKey = fire.database().ref().child('Order').push().key;
            const updateData = {};
    
            const data = {
                paymentDetails: paymentDetails,
                orderItem: cartData
            }
            updateData[`/Order/` + userId + '/' + newPostKey] = data;
            fire.database().ref().update(updateData).then(doc => {
                dispatch(orderUpdateData(data))
            });
    }
    },[])


 return(
     <div className={classes.root}>
         <Container>
         {error && <div>Uh oh, an error occurred! {error.message}</div>}
         {
             paidFor ? (
                 <div style={{textAlign:'center'}}>
                     <Typography className={classes.Typography} variant="h5">Congrs your payment successful</Typography>
                </div>
             ): (
                 <div style={{textAlign:'center'}}>
                    <Typography variant="h6" className={classes.Typography}>we provide a secure and safe way for payment</Typography>
                    <div id="paypal-button-container" style={{margin:'2% 0'}}></div>
                </div>
             )

         }
         </Container>
     </div>
 )   
}

const useStyles = makeStyles(theme => ({
    root: {
        padding:'4px 10%'
    },
    Typography: {
        fontFamily: 'inherit',
        fontWeight: '500',
        color: '#00669b',
        textAlign:'center',
        paddingTop:'4%'
    }

}))   
export default Payment;