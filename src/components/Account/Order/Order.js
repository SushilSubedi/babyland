// import React from 'react';
// import { makeStyles, TextField } from '@material-ui/core';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Payment from '../../Cart/Checkout/Payment';



// function getSteps() {
//   return ['Address', 'Payment Method', 'Order Placed'];
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return 'Please fill your address for your delivery';
//     case 1:
//       return 'Select your payment Method';
//     case 2:
//       return 'Order status';
//     default:
//       return 'checkout continue';
//   }
// }

// export default function HorizontalLabelPositionBelowStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box padding="4% 2% 5%" className={classes.root}>
//       {
//         activeStep === 0 ?
//           <div className={classes.fullAddress}>
//             <Typography className={classes.Typography}>Full-Address</Typography>
//             <div className={classes.address}>
//               <TextField
//                 id=" input field 2"
//                 label="Street-Address"
//                 type="text"
//                 className={classes.AddressField}
//               />

//               <TextField
//                 id=" input field 3"
//                 label="Address-Line2"
//                 type="text"
//                 className={classes.AddressField}
//               />

//             </div>
//             <div style={{ display: 'flex' }}>
//               <TextField
//                 id=" input field 4"
//                 label="City"
//                 type="text"
//                 className={classes.smallField}
//               />
//               <TextField
//                 id=" input field 4"
//                 label="Zip Code"
//                 type="number"
//                 className={classes.smallField}
//               />
//             </div>
//             <TextField
//               id=" input field 4"
//               label="Phone number"
//               type="number"
//               className={classes.AddressField}
//             />
//           </div> : activeStep === 1 ? <Payment/> : null
//       }
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             <Typography className={classes.instructions}>All steps completed</Typography>
//             <Button onClick={handleReset}>Reset</Button>
//           </div>
//         ) : (
//             <div>
//               <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//               <div>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className={classes.backButton}
//                 >
//                   Back
//               </Button>
//                 <Button variant="contained" color="primary" onClick={handleNext}>
//                   {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                 </Button>
//               </div>
//             </div>
//           )}
//       </div>
//     </Box>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   backButton: {
//     marginRight: theme.spacing(1),

//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   fullAddress: {
//     width: '65%',
//     padding: '0 4% 0 6%'
//   },
//   AddressField: {
//     width: '50%',
//     height: '50px',
//     margin: '0% 2% 0 0'
//   },
//   address: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
//   smallField: {
//     width: '20%',
//     marginRight: '2%'
//   },
// }));