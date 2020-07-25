import React,{ useState, useEffect } from 'react';
import { 
    Box,
    makeStyles,
    createStyles,
    Container,
    Paper,
    TextField,
    Avatar,
    Typography,
    Button,
    Link,
    Snackbar
} from '@material-ui/core';
import fire from '../../../config/fire';
import { Alert } from '@material-ui/lab';

import { useSelector  } from 'react-redux';

const Profile = ()=> {
    const classes = useStyles();
    const [name,setName] = useState('');
    const [update,setUpdate] = useState(false);
    const [open,setOpen] = useState(false);
    const [img,setImg] = useState('');
    const [uploadImg,setUploadImg] = useState('');
    const user = useSelector(state => state.AuthRedux.user) || [];
    const userID = useSelector(state => state.AuthRedux.userID) || [];
    const email = useSelector(state => state.AuthRedux.email) || [];


    const UploadImgHandler = () => {
        if(uploadImg){
            fire.auth().onAuthStateChanged(firebaseUser => {
                if(firebaseUser){
                    fire.storage().ref('users/'+ userID +'/profile.jpg').put(uploadImg).then(result =>{
                        const updateData = {};
                        const data = {
                            userID: userID,
                            profile: true
                        }
                        updateData[`/ProfilePic/` + userID ] = data;
                        fire.database().ref().update(updateData).then(updated =>{
                            profileDownloadHandler();
                        });
                    })
                }
            })
        }
    }

    
    const profileDownloadHandler = () => {
        fire.database().ref(`/ProfilePic/${userID}`).once('value',snapshot => {
            if(snapshot.val().userID === userID){
                fire.storage().ref('users/'+ userID + '/profile.jpg').getDownloadURL().then(url => {
                    setImg(url);
                }).catch(error => console.log(error))
            }
        })
    }

    useEffect(() => {
        if(uploadImg){
            UploadImgHandler();
        }
    },[uploadImg]);

    useEffect(() => {
        profileDownloadHandler();
    },[])


    const changeNameHandler = () => {

    }

    // const imageDownload = () => {
    // }

    const VerifyEmailHandler = () =>{
        try{
            fire.auth().onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    if (firebaseUser.emailVerified) {
                        update('Email is already verified')
                    }
                    else {
                    setUpdate('Email verification link send to your email address');
                    firebaseUser.sendEmailVerification();
                    }
                
                }
                
                })
        }catch(error){
            setUpdate(error);
        }
    }

    const changePasswordHandler = () =>{
        fire.auth().sendPasswordResetEmail(email).then(
            setUpdate('Link is send to your email account'),
            setOpen(true)
            ).catch(error =>{
            setUpdate(error.message)});
    }
    let updateMessage = null;
    if(update){
        updateMessage = <Snackbar open={open} onClose={()=>setOpen(false)} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={4000}><Alert variant="filled" severity="error">{update}</Alert></Snackbar>
    }

return(
    <Box  padding ='6% 2%'>
        <Container>
            <Box component={Paper} padding='2% 8% 2% 4%'>
                {updateMessage}
                <Box className={classes.profile} padding= "2% 0">
                    <div className={classes.input}>
                        <TextField
                            id= " input field"
                            label = "Full Name"
                            type= "text"
                            value= {user}
                            className={classes.InputField}
                        />
                        <TextField
                            id= " input field 1"
                            label = "UserID"
                            type= "text"
                            value= {userID}
                            className={classes.InputField}
                        />
                    </div>
                    <div className={classes.FullAvatar}>
                        <Typography className={classes.Typography}>AVATAR</Typography>
                        <Avatar alt="My profile" className={classes.Avatar} src={img}/>
                        <div className={classes.root}>
                        <input
                            accept="image/*"
                            style={{display:'none'}}
                            id="contained-button-file"
                            // value={uploadImg}
                            onChange={(e)=>setUploadImg(e.target.files[0])}
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" disableElevation={true} onClick={UploadImgHandler} className={classes.Button} component="span">
                            Upload
                            </Button>
                        </label>
                        
                        </div>
                    </div>
                </Box>
                <Box className={classes.profile} padding="2% 0%">
                    <div className={classes.typo}>
                        <Typography className={classes.Typography}>Email Address</Typography>
                        <Typography>Your email address is {email}</Typography>   
                    </div>
                    <div className={classes.linkDiv}>
                        <Link onClick={VerifyEmailHandler} className={classes.Link}>Verify</Link>
                    </div>
                </Box>
                <Box className={classes.profile} padding="2% 0%">
                <div className={classes.typo}>
                        <Typography className={classes.Typography}>Password</Typography>
                    </div>
                    <div className={classes.linkDiv}>
                        <Link onClick={changePasswordHandler} className={classes.Link}>Change</Link>
                    </div>
                </Box>
                <Box>
                    <Box className={classes.profile} padding="2% 5%">
                        <div className={classes.fullAddress}>
                            <Typography className={classes.Typography}>Full-Address</Typography>
                            <div className={classes.address}>
                                <TextField
                                    id= " input field 2"
                                    label = "Street-Address"
                                    type= "text"
                                    value= {name}
                                    onChange= {changeNameHandler}
                                    className={classes.AddressField}
                                />
                                <TextField
                                    id= " input field 3"
                                    label = "Address-Line2"
                                    type= "text"
                                    value= {name}
                                    onChange= {changeNameHandler}
                                    className={classes.AddressField}
                                />
                            
                            </div>
                            <div style={{display: 'flex'}}>
                                <TextField
                                    id= " input field 4"
                                    label = "City"
                                    type= "text"
                                    value= {name}
                                    onChange= {changeNameHandler}
                                    className={classes.smallField}
                                />
                                <TextField
                                    id= " input field 4"
                                    label = "Zip Code"
                                    type= "number"
                                    value= {name}
                                    onChange= {changeNameHandler}
                                    className={classes.smallField}
                                />
                            </div>
                              <TextField
                                id= " input field 4"
                                label = "Phone number"
                                type= "number"
                                value= {name}
                                onChange= {changeNameHandler}
                                className={classes.AddressField}
                            />
                        </div>
                        <div className={classes.buttonDiv}>
                            <Button className={classes.button}>Update</Button>
                        </div>
                    </Box>
                </Box>
                <Box className={classes.profile}  padding="2% 0%" style={{borderBottom: 'none'}}>
                <div className={classes.typo}>
                        <Typography className={classes.Typography}>My Order</Typography>
                        <Typography>No order is placed yet.</Typography>   
                    </div>
                    <div className={classes.linkDiv}>
                        
                    </div>
                </Box>
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
          smallField: {
            width: '20%',
            marginRight: '2%'
          },
          AddressField: {
            width: '90%',
            height: '50px',
            margin: '0% 2% 0 0'
          },
          address: {
            display: 'flex',
            justifyContent:'space-around',
          },
          fullAddress:{
            width: '65%',
            padding: '0 4% 0 6%'
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
            color: '#00669b',
            padding: '2% 0%'
          },
          profile: {
            display: 'flex',
            justifyContent: 'space-around',
            borderBottom: '1px solid #f5e4e4',
          },
          Link: {
              cursor: 'pointer',
              alignSelf: 'center'
          },
          typo: {
              width: '44%'
          },
          linkDiv: {
           width: '7%',
           alignSelf: 'center',
           paddingTop: '1%'   
          },
          button: {
            width: '90px',
            height:'40px',
            background: 'hotpink',
            "&:hover": {
                backgroundColor:'#fc03d7'
            }
          },
          buttonDiv: {
              alignSelf: 'flex-end',
              width: '17%'
          }
    })
)

export default Profile;