import React,{useState} from 'react';
import { Box,Paper, makeStyles, createStyles,Typography,Button } from '@material-ui/core';
import Input from '../../../GlobalComponents/Input';

const SignUp = (props) =>{
    
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isValid,setIsValid] = useState(false);
    const [emailMessage,setEmailMessage] = useState('');
    const [passwordMessage,setPasswordMessage] = useState('');

    
    const handleEmail = (e) =>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value === ''){
            setIsValid(false);
            setEmailMessage('Email-address field is empty');
        }else if( re.test(e.target.value) ){
            setIsValid(true);
            setEmailMessage(null);
        }else{
            setIsValid(false);
            setEmailMessage('Email-address field is not valid');
        }
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{

        if(e.target.value === ''){
            setIsValid(false);
            setPasswordMessage('Password field is empty');
        }else if(e.target.value.length > 6 && e.target.value.length < 16 ){
            setIsValid(true);
            setPasswordMessage(null);
        }else{
            setIsValid(false);
            setPasswordMessage('Password is not valid');
        }
        setPassword(e.target.value);
    }

    const onSubmitHandler = () =>{
        if(emailMessage === null && passwordMessage === null && isValid === true){
            console.log("hey there on submit button on process!")
        }else if(!isValid){
            setPasswordMessage('Password field is empty');
            setEmailMessage('Email-address is empty');
        }else if(emailMessage === ''){
            setEmailMessage('Email-address is empty');
        }else if(passwordMessage === ''){
            setPasswordMessage('Password is empty');
        }
    }

    const data = [
        {
            label: 'Emailaddress',
            type: 'email',
            value: email,
            onChange: handleEmail,
            errorMessage: emailMessage
        },
        {
            label: 'Password',
            type: 'password',
            value: password,
            onChange: handlePassword,
            errorMessage: passwordMessage
        }
    ];
    return(
        <Box component={Paper} padding="2%" className={classes.SignupPage}>
            <form className={classes.form}>
                <Typography className={classes.Typography1}>Sign up</Typography>
                {data.map((items,index) =>{
                    return(<Input
                                key={index}
                                label={items.label} 
                                type={items.type} 
                                onChange={items.onChange} 
                                errorMessage={items.errorMessage}
                            />)
                })}
                <div className={classes.ButtonLink}>
                    <Button className={classes.button} onClick={onSubmitHandler}>Submit</Button>
                </div>
            </form>
        </Box>
    )
};

const useStyles = makeStyles(theme =>
    createStyles({
        form: {
            width:'70%',
            alignSelf:'center'
        },
        SignupPage: {
            display:'flex',
            justifyContent:'center',
            height:'350px',
            position:'relative'           
        },
        Typography1: {
            fontSize:'22px',
            display:'flex',
            justifyContent:'center',
            fontFamily:'inherit',
            fontWeight:'500',
            color:'#00669b'
        },
        button: {
            backgroundColor:'hotpink',
            textTransform:'initial',
            fontSize:'16px',
            "&:hover": {
                backgroundColor:'#fc03d7'
            }
        },
        ButtonLink: {
            display:'flex',
            justifyContent:'center',
            padding:'7% 0 0 0'
        },
        icon: {
            position: "absolute",
            zIndex: 1,
            top: '11px',
            right: '-9%',
            margin: "0 auto",
            height:'80px',
            width:'80px'
          }
    }))

export default SignUp;    