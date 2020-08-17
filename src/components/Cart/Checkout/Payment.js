import React,{ useState,useEffect,useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

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
            window.paypal.Buttons({
                createOrder: (data,actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                            description : product.description,
                            amount : {
                                currency_code: 'INR',
                                value:product.price
                            }
                        }
                        ]
                    })
                },
                onApprove: async (data,actions) => {
                    const order = await actions.order.capture();
                    console.log("paypal",order);
                    setPaidFor(true);
                },
                onError: err => {
                    setError(err);
                    console.error("erros1",err);
                    },
            })
            .render(paypalRef.current); 
        }
        
        pay();
    
    },[product.description, product.price]);


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
                     <div ref = {paypalRef}/>
                     {/* <Button ref={paypalRef} className={classes.button}></Button> */}
                </div>
             )

         }
         </Container>
     </div>
 )   
}

export default Payment;