import React,{ useState } from 'react';
import { Box,Paper, makeStyles, createStyles,Typography,Button,Link } from '@material-ui/core';
import Input from '../../../GlobalComponents/Input';


const Login = (props) =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isValid,setIsValid] = useState(false);

    const handleEmail = (e) =>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value === ''){
            setIsValid(true);
            console.log("email is khali")

        }else if( re.test(e.target.value) ){
            setEmail(e.target.value);
            console.log("invalid");
        }else{
            setIsValid(false);
            console.log("invalid")
        }
        console.log(e.target.value)
    }

    const handlePassword = (e) =>{
        if(e.target.value === ''){
            setIsValid(false);
            console.log("password kehi xaina");
        }else if(e.target.value < 6 && e.target.value > 16 ){
            setPassword(e.target.value);
            setIsValid(true);
        }else{
            setIsValid(false);
            console.log("password sahi xaina");
        }
    }

    const onSubmitHandler = () =>{
        if(isValid === true){
            console.log('submited')
        }
        console.log('error');
    }

    const data = [
        {
            label: 'Emailaddress',
            type: 'email',
            value: email,
            onChange: handleEmail
        },
        {
            label: 'Password',
            type: 'password',
            value: password,
            onChange: handlePassword
        }
    ];



    const classes = useStyles();
    return(
        <Box component={Paper} padding="2%" elevation={0} className={classes.loginPage}>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <Typography className={classes.Typography1}>Login</Typography>
                {data.map((items,index) =>{
                    return(<div style={{padding:'7% 0%'}} key={index}>
                                <Input label={items.label} type={items.type} value={items.value} onChange={items.onChange} />
                        </div>
                        )
                })}
                <div className={classes.ButtonLink}>
                    <Button className={classes.button}>Submit</Button>
                </div>
                <div className={classes.ButtonLink}>
                <Link>Forget your password?</Link>
                </div>
            </form>
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
    }))



export default Login;