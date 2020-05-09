import React from 'react';
import { AppBar,makeStyles,createStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const NavigationBar = () => {
    const classes = useStyles();
    return(
       <AppBar title="Baby Land" color='primary'>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
       </AppBar>
    )
}

const useStyles = makeStyles(theme => 
    createStyles({
}))


export default NavigationBar;