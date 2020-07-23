import React,{useState} from 'react';
import { Box,makeStyles,createStyles, Container,Paper,TextField,Avatar,Typography,Button } from '@material-ui/core';

const Profile = ()=> {
    const classes = useStyles();
    const [name,setName] = useState('');

    const changeNameHandler = () => {
        console.log("hey,There")
    }

return(
    <Box  padding ='6% 2%'>
        <Container>
            <Box component={Paper} className={classes.profile}>
            <div className={classes.input}>
                <TextField
                    id= " input field"
                    label = "Full Name"
                    type= "text"
                    value= {name}
                    onChange= {changeNameHandler}
                    className={classes.InputField}
                />
                <TextField
                    id= " input field"
                    label = "UserID"
                    type= "text"
                    value= {name}
                    onChange= {changeNameHandler}
                    className={classes.InputField}
                />
            </div>
            <div className={classes.FullAvatar}>
                <Typography className={classes.Typography}>AVATAR</Typography>
                <Avatar alt="My profile" className={classes.Avatar} src={null}/>
                <Button className={classes.Button}>
                    UPLOAD
                </Button>
            </div>
            </Box>
        </Container>
    </Box>
)
};

const useStyles = makeStyles(theme =>
    createStyles({
        InputField: {
            width: " 70%",
            height: "50px",
            margin: 'inherit'
          },
          input: {
                display: 'grid',
                width:'40%',
                margin: '1%'    
          },
          Avatar: {
            width: "140px",
            height: "140px",
            margin:'4% 0'
          },
          profile: {
              display: 'flex',
              justifyContent: 'space-around',
              padding: '2% 4%'
          },
          Button: {
              width: '90px',
              height:'40px',
              margin: 'inherit',
              marginTop: '7%',
              background: '#cfd0d1',
              color:'#0a0a0a',
              "&:hover": {
                  background:'#bdb9b9'
              }
          },
          FullAvatar: {
              textAlign:'center'
          },
          Typography: {
            fontSize: '22px',
            fontFamily: 'inherit',
            fontWeight: '500',
            color: '#00669b'
          }
    })
)

export default Profile;