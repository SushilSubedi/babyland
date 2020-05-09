import { createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
        primary: {
            main:'#3cfaf4'
        },
        secondary: {
            main:'#ef5cf7'
        }
    },
    overrides: {
        MuiButton: {
          root: {
            color: 'white',
            '&:hover': {
              backgroundColor: 'purple'
            }
          }
        }}
});
export default theme;