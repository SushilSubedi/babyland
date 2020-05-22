import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles, Typography} from '@material-ui/core';

const FeedbackDialog =(props)=> {

  const {open,handleClose}=props;
  const classes = useStyles();
  return (
    <div>
      
      <Dialog open={open} onClose ={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" color="secondary">Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.Dialoghead}>
            Please give feedback to the website for the greater good of the babies.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField className=
          "commentBox"
          label="Comment"
          type="text"
          margin-top="80px"
          fontSize="40px"          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.cancelbutton} >
            Cancel
          </Button>
          <Button onClick={handleClose} className={classes.submitbutton}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles(theme => 
  createStyles({
    cancelbutton:{
      
      textTransform:'initial',
      fontSize:'16px',
      display: 'inline-block',
      textAlign:' center',
      backgroundColor:'#8A9747',
      position:'relative',
      right:'30px',
      borderRadius: '8px',
    
    },

    submitbutton:{
      
      textTransform:'initial',
      fontSize:'16px',
      backgroundColor:'#604A6E',
      position:'relative',
      right:'10px',
      borderRadius: '8px',
    
    },
    Dialoghead:{
      color:'#00669b',
      fontSize:'18px',
    },
    commentbox:{
      fontSize:'30px',
    }

  }))
 
export default FeedbackDialog;