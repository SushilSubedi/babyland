import { createStyles, makeStyles,Box } from '@material-ui/core';
import React from 'react';

const AboutUs = () => {
    const classes = useStyles()
    return (
        <Box padding="3% 1%">
            AboutUs
        </Box>
    )

};

const useStyles= makeStyles(theme => 
    createStyles({
        
    }));

export default AboutUs;