import React,{ useState,useEffect } from 'react';
import { Box,Paper, makeStyles, createStyles,Typography,Button,Link ,Snackbar} from '@material-ui/core';
import Input from '../../../GlobalComponents/Input';
import { useDispatch,useSelector } from 'react-redux';
import { authLogin,setAuthRedirectPath } from '../AuthRedux/action';
import { Redirect } from 'react-router-dom';
import Loader from '../../../GlobalComponents/Loader';
import fire from '../../../config/fire';
import { Alert } from '@material-ui/lab';

const Login = (props) =>{

    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isValid,setIsValid] = useState(false);
    const [emailMessage,setEmailMessage] = useState('');
    const [passwordMessage,setPasswordMessage] = useState('');
    const [open,setOpen] = useState(true);
    const [passwordUpdate,setPasswordUpdate] = useState('');

    const dispatch = useDispatch();

    const loading = useSelector(state => state.AuthRedux.loading);
    const authentication = useSelector(state => state.AuthRedux.refreshToken !== null);
    const authRedirectPath = useSelector(state => state.AuthRedux.authRedirectPath);

    useEffect(()=>{
        if(authRedirectPath !== null){
            dispatch(setAuthRedirectPath('/'));
        }
    },[])

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
            dispatch(authLogin(email,password));
            setEmail('');
            setPassword('');
        }else if(!isValid){
            setPasswordMessage('Password field is empty');
            setEmailMessage('Email-address is empty');
        }else if(emailMessage === ''){
            setEmailMessage('Email-address is empty');
        }else if(passwordMessage === ''){
            setPasswordMessage('Password is empty');
        }
    }

    const handleResetPassword = () =>{
        if(email){
            fire.auth().sendPasswordResetEmail(email).then(setPasswordUpdate('Link is send to your email account')).catch(error =>{
            setPasswordUpdate(error.message)});
        } else {
            setEmailMessage('Email-address is empty');
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

    let form = (
        <form className={classes.form}>
                <Typography className={classes.Typography1}>Login</Typography>
                {data.map((items,index) =>{
                return(
                <Input 
                    key={index} 
                    label={items.label} 
                    type={items.type} 
                    value={items.value} 
                    onChange={items.onChange} 
                    errorMessage={items.errorMessage} 
                    style={null}
                    outlined="standard"
                />)
                })}
            <div className={classes.ButtonLink}>
                <Button className={classes.button} onClick={onSubmitHandler}>Submit</Button>
            </div>
            <div className={classes.ButtonLink}>
                <Link className={classes.link} onClick={handleResetPassword}>Forget your password?</Link>
            </div>
        </form>
    )

    if(loading) {
        form = <Loader/>
    };

    
    let redirectAuth=null;
    if(authentication){
       redirectAuth=<Redirect to ={authRedirectPath}/>
    }
    let passwordUpdateError = null;
    if(passwordUpdate){
        passwordUpdateError = <Snackbar open={open} onClose={()=>setOpen(false)} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={4000}><Alert variant="filled" severity="error">{passwordUpdate}</Alert></Snackbar>
    }

    return(
        <Box component={Paper} padding="2%" className={classes.loginPage}>
            {passwordUpdateError}
           {redirectAuth}
           {form}
        </Box>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        form: {
            width:'70%',
            alignSelf:'center'
        },
        loginPage: {
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
        link: {
            cursor: 'pointer'
        }
    }))



export default Login;