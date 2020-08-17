import { createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
        primary: {
          main:'#f51bb3'
        },
        secondary: {
          main:'#f5790c'
        },
        // text: {
        //   primary:'white'  
        // }
    },
    overrides: {
      MuiButton: {
        root: {
          color: 'Black',
          // backgroundColor:'hotpink',
          fontSize:'14px'
          // '&:hover': {
          //   backgroundColor: ''
          // }
        }
      }}
});
export default theme;