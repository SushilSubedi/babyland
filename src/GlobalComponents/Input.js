import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core';

const Input = (props) =>{
    const classes = useStyles();
    const { label,type } = props;
        return(
            <TextField
                id= "input field"
                label= {label}
                type= {type}
                className={classes.InputField}
                // variant= "outlined"
            />
        )
}

const useStyles = makeStyles(theme =>
    createStyles({
        InputField: {
            width: '100%',
            height: '50px'
        }
    }))

export default Input;