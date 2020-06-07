import React,{useState} from 'react';
import { makeStyles,createStyles,Box } from '@material-ui/core';
import FilterDropDown from '../../../GlobalComponents/FilterDropDown'

const FilterItems = (props) => {
    const [price,setPrice] = useState('');
    const classes = useStyles();
    return(
        <Box className={classes.FilterItems}>
            <FilterDropDown
                value={price}
                label= "Price"
                onChange= {(e)=>setPrice(e.target.value)}
                options= {[
                    {value:'low',label:'low'},
                    {value:'middle',label:'middle'},
                    {value:'high',label:'high'}
            ]}
            />
        </Box>
    )
}

const useStyles = makeStyles(
    createStyles({
        FilterItems:{
            display: 'flex',
            justifyContent: 'flex-end',
            padding:'4px 36px'
        }
    })
)

export default FilterItems;