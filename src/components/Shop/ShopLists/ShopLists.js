import React, { useState } from "react";
import {
  makeStyles,
  createStyles,
  Box,
  Paper
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Cosmetic from "../ShopLists/Cosmetic/Cosmetic";
import Shampoo from "../ShopLists/Shampoo/Shampoo";
import PregenacyKit from "../ShopLists/PregnancyKits/PregancyKit";
import Diapers from "../ShopLists/Diaper/Diapers";
import Tshirt from "../ShopLists/Tshirt/Tshirt";
import Toys from "../ShopLists/Toys/Toys";
import Foods from "../ShopLists/Foods/Foods";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ShopLists = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [label, setlabel] = useState("T-shirt");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleLabel(newValue);
  };

  const handleLabel = (value) => {
    if (value === 0) {
      setlabel("T-Shirt");
    } else if (value === 1) {
      setlabel("Toys");
    } else if (value === 2) {
      setlabel("Shampoo");
    } else if (value === 3) {
      setlabel("Cosmetic");
    } else if (value === 4) {
      setlabel("Diapers");
    } else if (value === 5) {
      setlabel("Pants");
    } else if (value === 6) {
      setlabel("Pregancy Kit");
    } else {
      setlabel("T-shirt");
    }
  };

  return (
    <Box padding="1% 0 0 0%">
      <BreadCrumb item={label} />
      <Typography variant="h5" className={classes.Typography}>Shopping List:</Typography>
      <Box component={Paper} className={classes.root} elevation={0}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab classes={{ root: classes.rootTabs }} label="T-shirt" />
          <Tab classes={{ root: classes.rootTabs }} label="Toys" />
          <Tab classes={{ root: classes.rootTabs }} label="Shampoo" />
          <Tab classes={{ root: classes.rootTabs }} label="Cosmetic" />
          <Tab classes={{ root: classes.rootTabs }} label="Diapers" />
          <Tab classes={{ root: classes.rootTabs }} label="Foods" />
          <Tab classes={{ root: classes.rootTabs }} label="Pregenacy kit" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Tshirt />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Toys />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Shampoo />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Cosmetic />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Diapers />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Foods />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <PregenacyKit />
        </TabPanel>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: 350
    },
    tabs: {
      border: `1px solid ${theme.palette.divider}`,
      width: "70%",
      maxWidth: '500px'
    },
    rootTabs: {
      maxWidth: "600px",
    },
    Typography: {
      color:'#00669b',
      alignSelf:'flex-end',
      padding: '10px 0'
  }
  })
);

export default ShopLists;
