import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Login from './Login/Login';
import Signup from './Signup/SignUp';
import {Tabs,Tab,Container} from '@material-ui/core';

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
          <Typography>{children}</Typography>
      )}
    </div>
  );
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box padding="8% 0 0 0">
        <Container maxWidth= "xs">
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
