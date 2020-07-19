import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles,createStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBox = (props) => {
  const {open,handleClose,DialogTitles,DialogContents,handleNavigation} = props;
    const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth= "md"
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className={classes.Title}>{DialogTitles}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" className={classes.Content}>
            {DialogContents}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            No
          </Button>
          <Button onClick={handleNavigation} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles(theme =>
    createStyles({
        Title: {
            fontFamily:'inherit',
            fontWeight:'500',
            color:'#00669b',
            borderBottom: '1px solid #cfc1c0'
        },
        Content: {
            fontSize:'16px',
            fontFamily:'inherit',
            fontWeight: '500'
        }
    }))

export default DialogBox;