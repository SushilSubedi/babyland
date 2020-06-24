import React,{Suspense} from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';
import Routers from './Routers/Routers';
import Loader from './GlobalComponents/Loader'

const App = () => {
  return(
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<Loader/>}>
        <Routers/>
      </Suspense>
    </MuiThemeProvider> 
  )
}

export default App;