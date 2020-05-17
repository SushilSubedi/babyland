import React from 'react';
import { Box, Container,Paper, makeStyles, createStyles,Typography,Button,Link,Fab } from '@material-ui/core';
import Input from '../../GlobalComponents/Input';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const data = [
    {
        label: 'Emailaddress',
        type: 'email'
    },
    {
        label: 'Password',
        type: 'password'
    }
];

const Login = () =>{
    const classes = useStyles();

    return(
        <Box padding="8% 0 0 0">
            <Container maxWidth= "xs">
                <Box component={Paper} padding="2%"  className={classes.loginPage}>
                    <Fab color="primary" className={classes.fabButton}>
                        <CreateOutlinedIcon style={{fontSize:'34px'}}/>
                    </Fab>
                    <form className={classes.form} onSubmit={'/'}>
                        <Typography className={classes.Typography1}>Login</Typography>
                        {data.map((items,index) =>{
                            return(<div style={{padding:'7% 0%'}} key={index}>
                                        <Input label={items.label} type={items.type}/>
                                </div>
                                )
                        })}
                        <div className={classes.ButtonLink} style={{display:'flex',justifyContent:'center',padding:'7% 0 0 0'}}>
                            <Button className={classes.button}>Submit</Button>
                        </div>
                        <div className={classes.ButtonLink}>
                            <Link>Forget your password?</Link>
                        </div>
                    </form>
                </Box>
            </Container>
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
            padding:'4% 0 0 0'
        },
        fabButton: {
            position: "absolute",
            zIndex: 1,
            top: '11px',
            right: '-9%',
            margin: "0 auto",
            height:'80px',
            width:'80px'
          }
    }))



export default Login;