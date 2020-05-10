import React from 'react';
import { Box, makeStyles, createStyles } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';

import NavigationBar from './components/NavigationBar/NavigationBar';
import ImageSlider from './components/ImageSlider/ImageSlider';

const App = () => {
  const classes = useStyles();

  return(
    <MuiThemeProvider theme={theme}>
      <div className={classes.mainPage}>
        <div>
          <NavigationBar/>
        </div>
        <div>
          <ImageSlider/>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles(theme => 
  createStyles({
    mainPage: {
      display:'flex'
    }
  }))

export default App;