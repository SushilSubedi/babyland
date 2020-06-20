import React from 'react';
import { FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';

const FilterDropDown = (props) =>{
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

export default FilterDropDown;