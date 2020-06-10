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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [subjectMessage, setSubjectMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const { open, handleClose } = props;
  const classes = useStyles();

  const handleEmail = (e) => {
    console.log("email");
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
  const handleSubject = (e) => {
    console.log("subject");
    if (e.target.value === "") {
      setIsValid(false);
      setSubject("Subject field is empty");
    } else if (e.target.value.length > 8 && e.target.value.length < 30) {
      setIsValid(true);
      setSubject(null);
    } else {
      setIsValid(false);
      setSubject("Subject is not valid");
    }
  };
  const handleMessage = (e) => {
    console.log("message");
    if (e.target.value === "") {
      setIsValid(false);
      setMessage("Message field is empty");
    } else if (e.target.value.length > 10 && e.target.value.length < 255) {
      setIsValid(true);
      setMessage(null);
    } else {
      setIsValid(false);
      setMessage("Message is not valid");
    }
    setMessage(e.target.value);
  };
  const onSubmitHandler = () => {
    console.log("hello");
    if (
      emailMessage === null &&
      subjectMessage === null &&
      isValid === true &&
      feedbackMessage === null
    ) {
      setSubject("");
      setEmail("");
      setMessage("");
    } else if (!isValid) {
      setSubjectMessage("Subject field is empty");
      setEmailMessage("Email-address is empty");
      setFeedbackMessage("Message is empty");
    } else if (emailMessage === "") {
      setEmailMessage("Email-address is empty");
    } else if (subjectMessage === "") {
      setSubjectMessage("subject is empty");
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
    {
      label: "Subject",
      type: "text",
      value: subject,
      onChange: handleSubject,
      errorMessage: subjectMessage,
    },
    {
      label: "Message",
      type: "text",
      value: message,
      onChange: handleMessage,
      errorMessage: feedbackMessage,
    },
  ];
  return (
    <Dialog
      className={classes.Dialog}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <DialogContentText className={classes.Dialoghead}>
          Please give feedback for the greater good of the babies.
        </DialogContentText>
        <form className={classes.inputfield}>
          {data.map((items, index) => {
            if (items.label === "Message") {
              return (
                <Input
                  key={index}
                  label={items.label}
                  type={items.type}
                  value={items.value}
                  onChange={items.onChange}
                  errorMessage={items.errorMessage}
                  outlined="outlined"
                />
              );
            } else {
              return (
                <Input
                  className={classes.messageform}
                  key={index}
                  label={items.label}
                  type={items.type}
                  value={items.value}
                  onChange={items.onChange}
                  errorMessage={items.errorMessage}
                  outlined="outlined"
                />
              );
            }
          })}
        </form>
      </DialogContent>

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

    messageform: {
      height: "40px",
    },

    inputfield: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // messagebox: {
    //   height: "40px",
    // },
  })
);

export default FeedbackDialog;
