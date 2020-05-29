import React,{useState} from "react";
import Login from './Login/Login';
import Signup from './Signup/SignUp';
import { Tabs,Tab,Container,Box,Typography,Snackbar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Typography component={'div'}>{children}</Typography>
      )}
    </div>
  );
}

export default function SimpleTabs(props) {

  const [value, setValue] = React.useState(0);
  const [open,setOpen] = useState(true);

  const error = useSelector(state => state.AuthRedux.error);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let errorMessage = null;
  if(error){
    errorMessage = (<Snackbar open={open} onClose={()=>setOpen(false)} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={4000}><Alert variant="filled" severity="error">{error}</Alert></Snackbar>)
  }

  return (
    <Box padding="8% 0 0 0">
        <Container maxWidth= "xs">
            {errorMessage}
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
            >
                <Tab label="Login" />
                <Tab label="Signup" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup/>
            </TabPanel>
        </Container>  
    </Box>
  );
}
