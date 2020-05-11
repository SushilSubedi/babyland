import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';
<<<<<<< HEAD
import AppCard from './components/AppCard/AppCard';
=======
import Routers from './Routers/Routers';
>>>>>>> dce0ecf40c42a403b94b6774056ace92d2d32b0b


const App = () => {
  return(
    <MuiThemeProvider theme={theme}>
<<<<<<< HEAD
      <Box className={classes.App}>
        <NavigationBar/>
         <AppCard/>
      </Box>
=======
      <Routers/>
>>>>>>> dce0ecf40c42a403b94b6774056ace92d2d32b0b
    </MuiThemeProvider>
   
    
  )
  
}

export default App;