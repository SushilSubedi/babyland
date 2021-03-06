import React, { useState } from "react";

import {
  makeStyles,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  Container,
  Snackbar
} from "@material-ui/core";
import Input from "../../../GlobalComponents/Input";
import fire from "../../../config/fire";
import { Alert } from '@material-ui/lab'

const FeedbackDialog = (props) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [subjectMessage, setSubjectMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const { open, onClose } = props;

  const classes = useStyles();

  const handleClose= () => {
    setOpenAlert(false);
    onClose();
  }

  const handleEmail = (e) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    if (e.target.value === "") {
      setIsValid(false);
      setSubjectMessage("Subject field is empty");
    } else if (e.target.value.length > 5 && e.target.value.length < 30) {
      setIsValid(true);
      setSubjectMessage(null);
    } else {
      setIsValid(false);
      setSubjectMessage("Subject is not valid");
    }
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    if (e.target.value === "") {
      setIsValid(false);
      setFeedbackMessage("Message field is empty");
    } else if (e.target.value.length > 8 && e.target.value.length < 255) {
      setIsValid(true);
      setFeedbackMessage(null);
    } else {
      setIsValid(false);
      setFeedbackMessage("Message is not valid");
    }
    setMessage(e.target.value);
  };
  const onSubmitHandler = () => {
    if (
      emailMessage === null &&
      subjectMessage === null &&
      isValid === true &&
      feedbackMessage === null
    ) {
      const feedback={
        email:email,
        subject:subject,
        message:message
      }
      setOpenAlert(true);
      const updateData={};
      const newPostKey = fire.database().ref().child('feedback').push().key;
      updateData[`/feedback/`+ newPostKey] = feedback;
      fire.database().ref().update(updateData).then(doc => {
        setSubject("");
        setEmail("");
        setMessage("");
        handleClose();
      })

    } else if (!isValid) {
      setSubjectMessage("Subject field is empty");
      setEmailMessage("Email-address field is empty");
      setFeedbackMessage("Message field is empty");
    } else if (emailMessage === "") {
      setEmailMessage("Email-address is empty");
    } else if (subjectMessage === "") {
      setSubjectMessage("subject is empty");
    } else if (feedbackMessage === "") {
      setFeedbackMessage("Feedback is empty");
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  }

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
          <Container>
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
                    className={classes.message}
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
          </Container>
        </form>
      </DialogContent>

      <DialogActions>
        <Button className={classes.cancelbutton} onClick={handleClose}>
          Cancel
        </Button>
        <Button className={classes.submitbutton} onClick={onSubmitHandler}>
          Submit
        </Button>
        <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="success">
            Thank you for your feedback!
          </Alert>
        </Snackbar>
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
      color:'#fff',
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
      padding: "0 11%",
    },
    message: {
      height: "80px",
    },
  })
);

export default FeedbackDialog;
