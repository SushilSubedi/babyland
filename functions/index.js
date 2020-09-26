const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const paypal = require('paypal-rest-sdk');

const admin = require("firebase-admin");
const express = require('express');
const app = express();
admin.initializeApp();
//config your environment


// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req,res, next) => {
  res.header('Access-Control-Allow-Origin', "*"); //This is used to give access to every host in our browser
  res.header('Access-Control-Allow-Header','Origin','X-Request-with','Content-Type','Accept','Authorization');
  //This is use for giving request to every request from the client.
  if(req.method === 'OPTIONS') {
      //this is used for giving different put get request so that client used it
      res.header('Access-Control-Allow-Header','POST');
      return res.status(200).json({})

  }
 return next();
})


app.post('/pay', (req, res) => {
    // const prices = await req.body.price
    const payReq = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
          "return_url": `http://localhost:5001/babyland-2b68b/us-central1/app/success`,
          "cancel_url": `http://localhost:5001/babyland-2b68b/us-central1/app/cancel`,
        },
        "transactions": [
            {
                "amount": {
                    "currency": "INR",
                    "total": `200`,
                    "details": {
                        "shipping": "10.00",
                        "subtotal": "190.00"
                    }
                },
                "item_list": {
                    "items": [
                        {
                            "name": "Foto 1",
                            "currency": "INR",
                            "sku": "123",
                            "quantity": "1",
                            "price": "190.00"
                        }
                    ],
                },
                "description": "Payment description"
            }
        ]
        }
  
paypal.payment.create(payReq, (error, payment) => {
    // console.log(prices,"Psa")
  if (error) {
      throw error;
  } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.send(payment.id);
        }
      }
  }
});

});


app.post('/success', async(req, res) => {
    const paymentID = req.body.paymentID;
    const payerID = req.body.payerID;

    const prices = await req.body.price
  const execute_payment_json = {
    "payer_id":`${payerID}`,
    "transactions": [{
        "amount": {
            "currency": "INR",
            "total": `${prices}`
        }
    }]
  };

  paypal.payment.execute(paymentID, execute_payment_json, (error, payment) => {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Success');
    }
});
});

app.get('/cancel', (req, res) => res.send('Cancelled'));


exports.app = functions.https.onRequest(app);





// exports.pay = functions.https.onRequest((req,res) => {
//   return cors(req, res, () => {
//     // ...  
//     return cors(req,res, () => {
//       const payReq = JSON.stringify({
//         intent:'sale',
//         payer: {
//             payment_method: 'paypal'
//         },
//         redirect_urls: {
//             return_url: `${req.protocol}://${req.get('host')}/process`,
//             cancel_url: `${req.protocol}://${req.get('host')}/cancel`,
//         },
//         transaction: [{
//             amount: {
//                 total: req.body.price,
//                 currency: 'USD'
//             },
//             description: req.body.uid,
//             custom: req.body,uid
//         }]
//     });
//     paypal.payment.create(payReq, (error, payment) => {
//         const links = {};
//         if (error) {
//           console.error(error);
//           res.status('500').end();
//         } else {
//           // Capture HATEOAS links
//           payment.links.forEach((linkObj) => {
//             links[linkObj.rel] = {
//               href: linkObj.href,
//               method: linkObj.method
//             };
//           });
//           // If redirect url present, redirect user
//           if ( Object.prototype.hasOwnProperty.call(links, 'approval_url')) {
//             // REDIRECT USER TO links['approval_url'].href
//             console.info(links.approval_url.href);
//             // res.json({"approval_url":links.approval_url.href});
//             res.redirect(302, links.approval_url.href);
//           } else {
//             console.error('no redirect URI present');
//             res.status('500').end();
//           }
//         }
//       });
//      }) 
//   });
// });


// // 3.Complete the payment. Use the payer and payment IDs provided in the query string following the redirect.
// exports.process = functions.https.onRequest( (req, res) => {
//   return cors(req, res, async() => {
//     // ...
//     const paymentId = req.query.paymentId;
//     const payerId = {
//       payer_id: req.query.PayerID
//     };
//     const r = await paypal.payment.execute(paymentId, payerId, (error, payment) => {
//       if (error) {
//         console.error(error);
//         res.redirect(`${req.protocol}://${req.get('host')}/error`); // replace with your url page error
//       } else {
//         if (payment.state === 'approved') {
//           console.info('payment completed successfully, description: ', payment.transactions[0].description);
//           // console.info('req.custom: : ', payment.transactions[0].custom);
//           // set paid status to True in RealTime Database
//           const date = Date.now();
//           const uid = payment.transactions[0].description;
//           const ref = admin.database().ref('users/' + uid + '/');
//           ref.push({
//             'paid': true,
//             // 'description': description,
//             'date': date
//           })
//           res.redirect(`${req.protocol}://${req.get('host')}/success`); // replace with your url, page success
//         } else {
//           console.warn('payment.state: not approved ?');
//           // replace debug url
//           res.redirect(`https://console.firebase.google.com/project/${process.env.GCLOUD_PROJECT}/functions/logs?search=&severity=DEBUG`);
//         }
//       }
//     });
//     console.info('promise: ', r);
//   });
 
//   });
