import { createStyles, makeStyles,Box } from '@material-ui/core';
import React from 'react';

const Blog = () => {
    const classes = useStyles()
    return (
        <Box padding="3% 1%">
            Blog here
        </Box>
    )

};

const useStyles= makeStyles(theme => 
    createStyles({
        
    }));

export default Blog;