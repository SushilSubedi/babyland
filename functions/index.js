const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const paypal = require('paypal-rest-sdk');

const admin = require("firebase-admin");
const { error } = require('firebase-functions/lib/logger');
admin.initializeApp();
//config your environment
paypal.configure({
    mode: 'sandbox',
    client_id: functions.config().paypal.AS43awnsEbh6ueuE4g_3gQmBohsQgvFBeLOkjl3gjHgAvyzsQK1EWGIZatUhKqewmuRvNOHRp7CaqyYn,
    client_secret: functions.config().paypal.EKyUX0s7uRAHOI45RQ3QxMcjUxDW2gSKT5PmtXQXxb4C6Luu2jeBTOpmW2UZzbLNXxLNLjlGHyZYgjLN
})

exports.pay = functions.https.onRequest((req,res) => {
    const payReq = JSON.stringify({
        intent:'sale',
        payer: {
            payment_method: 'paypal'
        },
        redirect_urls: {
            return_url: `${req.protocol}://${req.get('host')}/process`,
            cancel_url: `${req.protocol}://${req.get('host')}/cancel`,
        },
        transaction: [{
            amount: {
                total: req.body.price,
                currency: 'USD'
            },
            description: req.body.uid,
            custom: req.body,uid
        }]
    })
});

// paypal.payment.create(payReq, (error,paypal.payment) => {
//     const links = {};
//     if(error){
//         res.status(500).end();
//     } else {
//         payment.links.forEach((linkObj) => {
//             links[linkObj.rel] = {
//                 href: linkObj.href,
//                 method: linkObj.method
//             };
//         });
//         if( Object.prototype.hasOwnProperty.call((links, 'approval_url'){
//             //Redirect user to links [arroval_url].href
//             console.info(links.approval_url.href);
//             res.redirect(302,links.approval_url.href);
//         } else {
//             console.error("no redurect url present");
//             res.status('500').end();
//         }
//     });
// });
