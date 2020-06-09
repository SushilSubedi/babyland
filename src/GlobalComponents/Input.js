import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const Input = (props) => {
  const classes = useStyles();
  const { label, type, value, onChange, errorMessage, outlined, style,comment } = props;

  let textField = (
  <TextField
    id="input field"
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    className={classes.InputField}
    style={style}
    variant={outlined}
  />);

    if(comment == true){
      return (
      <TextField
        id="input field"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        className={classes.input}
        variant={outlined}
      />)
    }

  return (
    <div style={{ padding: "6% 0%",width:'100%' }}>
      {textField}
      <Typography className={classes.Typography}>{errorMessage}</Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    InputField: {
      width: " 100%",
      height: "50px",
    },
    Typography: {
      fontSize: "12px",
      color: "red",
      marginTop:'2px'
    },
    input:{
      width:'100%',
      padding: '2% 0'
    }
  })
);

export default Input;
