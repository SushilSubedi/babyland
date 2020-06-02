import React from "react";
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

const FeedbackDialog = (props) => {
  const { open, handleClose } = props;
  const classes = useStyles();
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
          <TextField
            autoFocus
            inputProps={{ className: classes.emailbox }}
            label="Email Address"
            margin="dense"
            id="name"
            placeholder="Email Address"
            type="email"
            variant="outlined"
          />
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
        <Button className={classes.submitbutton} onClick={handleClose}>
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
