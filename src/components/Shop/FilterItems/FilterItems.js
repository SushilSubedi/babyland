import React,{useState} from 'react';
import { makeStyles,createStyles,Box, Typography } from '@material-ui/core';
import FilterDropDown from '../../../GlobalComponents/FilterDropDown'

const FilterItems = (props) => {
    const [price,setPrice] = useState('');
    const classes = useStyles();
    return(
        <Box className={classes.FilterItems}>
            <Typography variant="h5" className={classes.Typography}>Shopping List:</Typography>
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
            justifyContent: 'space-between',
            padding:'0px 51px 0 4px'
        },
        Typography: {
            color:'#00669b',
            alignSelf:'flex-end'
        }
    })
)

export default FilterItems;