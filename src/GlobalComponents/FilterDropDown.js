import React from 'react';
import { makeStyles, createStyles,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';

const FilterDropDown = (props) =>{
    const classes = useStyles();
    const { options,value,onChange,label } = props;
    return(
        <FormControl style={{width:'7%'}}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          onChange={onChange}
        >
            {options.map((item,index) =>{
                return <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
            })}
        </Select>
      </FormControl> 
    )
};

const useStyles = makeStyles(theme =>{
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            width:'7%'
          }
    })
}
)

export default FilterDropDown;