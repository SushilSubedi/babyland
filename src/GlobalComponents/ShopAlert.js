import { Box, Button, makeStyles, Typography,createStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ShopAlert = (props) => {
    const classes= useStyles();
    const history = useHistory();
    const NavigationHandler = () => {
        history.push('/Shop')
    }
return (
    <Box className={classes.root}>
        <Typography className={classes.Typography} variant="h5">{props.component} is empty! Do you want to Navigate into shop?</Typography>
        <Button className={classes.button} onClick={NavigationHandler}>Shop</Button>
    </Box>
)
}

const useStyles = makeStyles(theme => 
    createStyles({
        root: {
            height:'600px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            padding:"4% 0 0 1%"
        },
        button: {
            color: "white",
            background: "hotpink",
            width: "160px",
            height: "48px",
            letterSpacing: "1px",
            fontSize: "17px",
            textTransform: "initial",
            margin: "2%",
            borderRadius:'10px',
            "&:hover": {
                background:'pink'
            }
        },
        Typography: {
            color:'#858f87',
            fontWeight:'500',
        }
    }))


export default ShopAlert;