import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  createStyles,
  Typography,
  ListItemSecondaryAction,
} from "@material-ui/core";

const InputOutlined = (props) => {
  const classes = useStyles();
  const { label, type, value, onChange, errorMessage, outlined } = props;

  return (
    <div style={{ padding: "1% 0%" }}>
      <TextField
        id="input field"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        className={classes.InputField}
        variant={outlined === true ? "outlined" : null}
        size="small"
      />
      <Typography className={classes.Typography}>{errorMessage}</Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    InputField: {
      width: "348px",
      height: "43px",
    },
    Typography: {
      fontSize: "12px",
      color: "red",
    },
  })
);

export default InputOutlined;
