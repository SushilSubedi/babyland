import React from 'react';
import {Box,Typography,Button,makeStyles, createStyles,Paper} from '@material-ui/core';


const AppCard = () =>{
// const {name,description,imgSrc} = props;
const classes = useStyles();
return(
    <Box component={Paper} className={classes.card} >
        <div style={{marginRight:'auto',marginLeft:'auto',textAlign:'center'}}>
            {/* <img src={imgSrc} alt="hotel png file" className={classes.img}/> */}
            <Typography>
                <Box
                    fontWeight= {600}
                    fontSize={16}
                    style={{textTransform:"capitalize",
                    paddingTop:'10px',
                    paddingBottom:'15px'
                    }}
                >
                    name 
                </Box>
            </Typography>
            <Typography>
                <Box
                    fontWeight= {300}
                    fontSize={12}
                    style={{
                    paddingTop:'10px',
                    paddingBottom:'15px',
                    color:'grey'
                    }}
                    
                >
                 hello there   
                </Box>
                
            </Typography>
            <Button className={classes.button}>
                view
            </Button>

        </div>
    </Box>
)
}

const useStyles = makeStyles(theme =>
createStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '228px',
        height: '233px',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2% 1% 6% 1%',
        marginBottom: '22%',
        boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)',
        position:'relative',
        border: '1px solid rgba(0,0,0,0.1)',
        "&:hover":{
            transform: 'translate(-5px,-20px)'
        }
    },
    button:{
        backgroundColor:'Green',
        color:'white',
        textTransform:'initial',
        "&:hover":{
            backgroundColor:'blue'
        }
    },
    img:{
        width:'32%',
        marginTop:'16px'
    }
})
)


export default AppCard;
