import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "auto",
    justifyContent:'center',
    alignItems:'center',
    height:'600px'
  }
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress variant="indeterminate" size="60px"  />
    </div>
  );
}