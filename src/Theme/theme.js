import { createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
        primary: {
          main:'#3cfaf4'
        },
        secondary: {
          main:'#ef5cf7'
        },
        // text: {
        //   primary:'white'  
        // }
    },
    overrides: {
      MuiButton: {
        root: {
          color: 'white',
          // '&:hover': {
          //   backgroundColor: ''
          // }
        }
      }}
});
export default theme;