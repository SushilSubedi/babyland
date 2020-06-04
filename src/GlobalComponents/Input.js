 import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles,Typography } from '@material-ui/core';

const Input = (props) =>{
    const classes = useStyles();
    const { label,type,value,onChange,errorMessage,variant} = props;
        return(
            <div style={{padding:'6% 0%'}}>
                <TextField
                    id= "input field"
                    label= {label}
                    type= {type}
                    value={value}
                    onChange={onChange}
                    className={classes.InputField}
                />
                <Typography className={classes.Typography}>{errorMessage}</Typography>
            </div>
        )
}

const useStyles = makeStyles(theme =>
    createStyles({
        InputField: {
            width: '100%',
            height: '50px'
        },
        Typography: {
            fontSize: '12px',
            color:'red'
        }
    }))

export default Input;