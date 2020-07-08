import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles }
  from '@material-ui/core/styles';

const allitems = () => {

  const classes = UseStyles();

  return (
    <div >
      <Typography className={classes.items} >
        Items
      </Typography>
    </div>
  )
}

const UseStyles = makeStyles((theme: Theme) => createStyles({
  items: {
    fontSize: "25px",
    color: "rgb(232, 88, 49)",
    position: "relative",
    top: "40px",
  }

}));







export default allitems;