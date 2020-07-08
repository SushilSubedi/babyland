import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles }
  from '@material-ui/core/styles';

const total = () => {

  const classes = UseStyles();

  return (
    <div >
      <Typography className={classes.total} >
        Total
      </Typography>
    </div>
  )
}

const UseStyles = makeStyles((theme: Theme) => createStyles({
  total: {
    fontSize: "25px",
    color: "rgb(232, 88, 49)",
    position: "relative",
    top: "450px",
    right: "140px",
  }

}));

export default total;

