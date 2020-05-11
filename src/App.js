import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';
import Routers from './Routers/Routers';

const App = () => {
  return(
    <MuiThemeProvider theme={theme}>
      <Routers/>
    </MuiThemeProvider>
  )
}

export default App;