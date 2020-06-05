import React from 'react';
import { makeStyles,createStyles,Box } from '@material-ui/core';

const FilterItems = () => {
    const classes = useStyles();
    return(
        <Box className={classes.FilterItems}>
            FilterItems
        </Box>
    )
}

const useStyles = makeStyles(
    createStyles({
        FilterItems:{
            background:'yellow'
        }
    })
)

export default FilterItems;