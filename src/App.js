import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Box, makeStyles, createStyles } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';
import AppCard from './components/AppCard/AppCard';

const App = (props) =>{
  const classes = useStyles();

  return(
    <MuiThemeProvider theme={theme}>
      <Box className={classes.App}>
        <NavigationBar/>
         <AppCard/>
      </Box>
    </MuiThemeProvider>
   
    
  )
  
}

const useStyles = makeStyles(theme => 
  createStyles({
      App: {
        padding:'10px'
      } 
  }))

export default App;