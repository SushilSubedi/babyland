import React,{ useState } from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles, TextField,Dialog,Box, Container, Paper } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Payment from './Payment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CheckoutContext from './CheckoutContextAPI/CheckoutContext';
// import { Alert } from '@material-ui/lab';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  function getSteps() {
    return ['Address', 'Payment Method', 'Order Placed'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Please fill your address for your delivery';
      case 1:
        return 'Select your payment Method';
      case 2:
        return 'Order status';
      default:
        return 'checkout continue';
    }
  }



const Checkout = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [streetAddress,setStreetAddress] = useState('');
    const [addressLine,setAddressLine] = useState('');
    const [city,setCity] = useState('');
    const [zipCode,setZipCode] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [payment,setPayment] = useState(false);
    const pay = { payment,setPayment }
    // const [opens,setOpens] = useState(false);
    const steps = getSteps();
    // let message = null;
    const { open,handleClose,price } = props;


    

    const handleNext = () => {
      if(streetAddress !== '' && addressLine !== '' && city !== '' && zipCode !== '' && phoneNumber !== '' ){
        if(activeStep === 2){
          if(payment){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
        }else {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

      }
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
      handleClose();
    };
return (
  <CheckoutContext.Provider value={pay}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth= "lg"
        classes={{paper:classes.paper}}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <Box style={{margin:'8px 0'}}>
        {
          activeStep === 0 ?
            <div className={classes.fullAddress}>
              <Typography variant="h6" className={classes.Typography}>Full-Address:</Typography>
              <div className={classes.address}>
                <TextField
                  id=" input field 2"
                  label="Street-Address"
                  type="text"
                  className={classes.AddressField}
                  value={streetAddress}
                  onChange= {(e) => {setStreetAddress(e.target.value)}}
                />

                <TextField
                  id=" input field 3"
                  label="Address-Line2"
                  type="text"
                  value={addressLine}
                  className={classes.AddressField}
                  onChange= {(e) => setAddressLine(e.target.value)}
                />

              </div>
              <div style={{ display: 'flex' }}>
                <TextField
                  id=" input field 4"
                  label="City"
                  type="text"
                  value={city}
                  onChange= {(e) => setCity(e.target.value)}
                  className={classes.smallField}
                />
                <TextField
                  id=" input field 4"
                  label="Zip Code"
                  type="number"
                  value={zipCode}
                  onChange= {(e)=> setZipCode(e.target.value)}
                  className={classes.smallField}
                />
              </div>
              <TextField
                id=" input field 4"
                label="Phone number"
                type="number"
                value={phoneNumber}
                onChange= {(e) => setPhoneNumber(e.target.value)}
                className={classes.AddressField}
              />
            </div> : activeStep === 1 ? 
            <Payment
              price={price}
              line1={streetAddress}
              line2={addressLine}
              city={city}
              phone={phoneNumber}
              postalCode={zipCode}  
            />
             : (
                <Container className={classes.container}>
                      <Box component={Paper} className={classes.orderCard}>
                        <CheckCircleIcon className={classes.icon}/>
                        <Typography className={classes.order}>ORDER PLACED!</Typography>
                        <Typography className={classes.payment}>Payment Successful<ThumbUpIcon className={classes.icon2}/></Typography>
                        <div style={{margin:'4px 0'}}>
                          <Typography className={classes.order} >Amount:</Typography>
                          <Typography className={classes.price}>Rs{price}</Typography>
                        </div>
                      </Box>
                </Container>
            )
      }
      <Stepper style={{margin:"inherit"}} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{margin:"inherit"}}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All process is done!</Typography>
            <Button onClick={handleReset}>Completed</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
          <Button className={classes.cancel} onClick={handleClose}>Cancel</Button>
      </div>
        </Box>

    </Dialog>

  </CheckoutContext.Provider>
)
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    icon2: {
      fontSize:'16px',
      color:'#d4ed18',
      marginLeft:'4px'
    },
    price: {
      color:'#ff6952',
      textAlign:'center'
    },
    payment: {
      textAlign:'center',
      color:'#18ed9c'
    },  
    icon: {
      fontSize:'64px',
      color:'#18ed9c',
      alignSelf:'center'
    },
    order:{
      textAlign:'center',
      color:'white'
    },
    cancel: {
      float:'right',
      width: "70px",
      textTransform: "initial",
      height: "40px",
      marginRight: "8%",
      background: "#b3bdb8"
    },
    orderCard: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: ' rgba(0, 0, 0, 0.6)',
      width:'250px',
      height:'210px'
    },  
    container: {
      display:'flex',
      justifyContent:'center'
    },  
    paper: {
        width:'800px',
        maxHeight:'465px'
    },  
    backButton: {
      marginRight: theme.spacing(1),
  
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    fullAddress: {
      width: '65%',
      padding: '6px 0% 0 2%',
      margin:'auto'
    },
    AddressField: {
      width: '50%',
      height: '50px',
      margin: '0% 2% 0 0'
    },
    address: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    smallField: {
      width: '20%',
      marginRight: '2%'
    },
  }));


export default Checkout;