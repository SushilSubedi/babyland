import React, { useState } from "react";
import {
  makeStyles,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from "@material-ui/core";
import Input from "../../../GlobalComponents/Input";

const FeedbackDialog = (props) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const { open, handleClose } = props;
  const classes = useStyles();

  const handleEmail = (e) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value === "") {
      setIsValid(false);
      setEmailMessage("Email-address field is empty");
    } else if (re.test(e.target.value)) {
      setIsValid(true);
      setEmailMessage(null);
    } else {
      setIsValid(false);
      setEmailMessage("Email-address field is not valid");
    }
    setEmail(e.target.value);
  };
  const onSubmitHandler = () => {
    if (emailMessage === null && isValid === true) {
    } else if (!isValid) {
      setEmailMessage("Email-address is empty");
    } else if (emailMessage === "") {
      setEmailMessage("Email-address is empty");
    }
  };
  const data = [
    {
      label: "Emailaddress",
      type: "email",
      value: email,
      onChange: handleEmail,
      errorMessage: emailMessage,
    },
  ];
  return (
    <Dialog
      className={classes.Dialog}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContentText className={classes.Dialoghead}>
        Please give feedback for the greater good of the babies.
      </DialogContentText>
      <form className={classes.inputfield}>
        <div className={classes.emailbox}>
          {data.map((items, index) => {
            return (
              <TextField
                autoFocus
                inputProps={{ className: classes.emailbox }}
                label="Email Address"
                margin="dense"
                id="name"
                placeholder="Email Address"
                type="email"
                variant="outlined"
                onChange={items.onChange}
                errorMessage={items.errorMessage}
              />
            );
          })}
        </div>
        <div className={classes.subjectbox}>
          <TextField
            inputProps={{ className: classes.subjectbox }}
            autoFocus
            margin="dense"
            id="name"
            placeholder="Subject"
            label="Subject"
            type="text"
            variant="outlined"
          />
        </div>
        <div className={classes.commentbox}>
          <TextField
            inputProps={{ className: classes.commentbox }}
            autoFocus
            placeholder="Comment"
            margin="dense"
            id="name"
            label="Comment"
            type="text"
            variant="outlined"
          />
        </div>
      </form>

      <DialogActions>
        <Button className={classes.cancelbutton} onClick={handleClose}>
          Cancel
        </Button>
        <Button className={classes.submitbutton} onClick={onSubmitHandler}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    cancelbutton: {
      textTransform: "initial",
      fontSize: "16px",
      display: "inline-block",
      textAlign: " center",
      backgroundColor: "white",
      color: "black",
      position: "relative",
      right: "90px",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#E2F3F0",
      },
    },
    submitbutton: {
      textTransform: "initial",
      fontSize: "16px",
      backgroundColor: "hotpink",
      position: "relative",
      right: "75px",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#fc03d7",
      },
    },
    Dialoghead: {
      color: "#00669b",
      fontSize: "20px",
      marginTop: "20px",
      marginLeft: "10px",
      marginRight: "10px",
    },
    commentbox: {
      width: "300px",
      height: "60px",
      textAlign: "center",
    },
    subjectbox: {
      width: "300px",
      textAlign: "center",
    },
    emailbox: {
      width: "300px",
      textAlign: "center",
    },

    inputfield: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      height: "200px",
      paddingTop: "20px",
      paddingBottom: "41px",
    },
  })
);

export default FeedbackDialog;
