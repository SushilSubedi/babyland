import React from 'react';
import { makeStyles,createStyles,Box } from '@material-ui/core';
import FilterDropDown from '../../../GlobalComponents/FilterDropDown'

const FilterItems = (props) => {
    const { valued,onchanged } = props;
    const classes = useStyles();
    return(
        <Box className={classes.FilterItems}>     
            <FilterDropDown
                value={valued}
                label= "Price"
                onChange= {onchanged}
                options= {[
                    {value:'low',label:'low'},//(Below 1000) 
                    {value:'Mixed',label:'Mixed'},
                    {value:'high',label:'high'}
            ]}
            />
        </Box>
    )
}

const useStyles = makeStyles(
    createStyles({
        FilterItems:{
            // display: 'flex',
            // flexDirection: 'row-reverse',
            textAlign: 'end',
            padding:'0px 51px 0 4px'
        },
    })
)

export default FilterItems;