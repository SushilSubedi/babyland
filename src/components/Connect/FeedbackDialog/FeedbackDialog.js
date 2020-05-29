import React from 'react';
import { 
  makeStyles,
  createStyles, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,Button
} from '@material-ui/core';
// import { EmailIcon,SubjectIcon,ChatBubbleIcon } from '@material-ui/icons'
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const FeedbackDialog =(props)=> {

  const {open,handleClose}=props;
  const classes = useStyles();
  return (
    <form className={classes.dailogbox}>
    
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <div className={classes.feedbacktext}> 
            <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
        </div> */}
            <DialogContent>
              <div >
                <DialogContentText className={classes.Dialoghead}>
                  Please give feedback for the greater good of the babies.
                </DialogContentText>
              </div>
              <div className={classes.inputfield}>
                <div className={classes.emailbox}>
                  <TextField
                    autoFocus
                    
                    inputProps={{className:classes.emailbox}}
                    label={<EmailIcon/>}
                    margin="dense"
                    id="name"
                    placeholder="Email Address"
                    type="email"
                    variant="outlined"
                  />
                  
                </div>
                <div className={classes.subjectbox}>
                  <TextField
                    
                   inputProps={{className:classes.subjectbox}}
                    autoFocus
                    margin="dense"
                    id="name"
                    placeholder="Subject"
                    label={<SubjectIcon/>}
                    type="text"
                    variant="outlined"
                  
                  />
                </div>
                <div className={classes.commentbox}>
                  <TextField
                    label={<ChatBubbleIcon/>}
                    inputProps={{className:classes.commentbox}}
                    placeholder="Comment"
                    autoFocus
                    margin="dense"
                    id="name"
                    placeholder="Comment"
                    type="text"
                    variant="outlined"
                  
                  
                  />

                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button  className={classes.cancelbutton} onClick={handleClose} >
                Cancel
              </Button>
              <Button className={classes.submitbutton} onClick={handleClose} >
                Submit
              </Button>
            </DialogActions>
      </Dialog>
    </form>
  );
}

const useStyles = makeStyles(theme => 
  createStyles({
    cancelbutton:{
      textTransform:'initial',
      fontSize:'16px',
      display: 'inline-block',
      textAlign:' center',
      backgroundColor:'white',
      color:'black',
      position:'relative',
      right:'30px',
      borderRadius: '8px',
      "&:hover": {
        backgroundColor:'#E2F3F0'
      }
      
    
    },

    submitbutton:{  
      textTransform:'initial',
      fontSize:'16px',
      backgroundColor:'hotpink',
      position:'relative',
      right:'10px',
      borderRadius: '8px',
      "&:hover": {
        backgroundColor:'#fc03d7',
      }
    
    },
    Dialoghead:{
      color:'#00669b',
      fontSize:'20px', 
    },
    commentbox:{
      width:'300px',
      height:'80px',
      textAlign:'center',
       
    },
    subjectbox:{
       width:'300px',
       textAlign:'center',
    },
    emailbox:{
       width:'300px',
       textAlign:'center', 
    },
   
    feedbacktext:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',   
    },
    inputfield:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
      height:'260px',
      width:'500px',
      marginLeft:'20px'  ,
      marginTop:'10px'  
     },
    
    emailicon:{
      position:'absolute',
      left:'90px',
      

    },
    subjecticon:{
      position:'absolute',
      left:'90px',

    },
    messageicon:{
      position:'absolute',
      left:'90px',
    },
    placeholder: { 
      alignItems:'center',
     }

   
   
  }))
 
export default FeedbackDialog;