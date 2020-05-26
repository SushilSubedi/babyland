import React from 'react';
import {Box,Typography,Button,makeStyles, createStyles,Paper} from '@material-ui/core';


const AppCard = (props) =>{
const {name,description,imgSrc} = props;
const classes = useStyles();
return(
    <Box component={Paper} className={classes.card} >
        <div style={{marginRight:'auto',marginLeft:'auto',textAlign:'center'}}>
             <img src={imgSrc}  className={classes.img} alt="mother text"/> 
            <Typography variant="h5" component={'div'}>
                <Box
                    fontWeight={500}
                    fontSize={22}
                    style={{
                        textTransform:"capitalize",
                        paddingTop:'5px',
                        paddingBottom:'15px',
                        color:'#00669b',
                    
                    }}
                >
                    {name}
                </Box>
            </Typography>
            <Typography>
                <Box
                    fontWeight= {300}
                    fontSize={15}
                    style={{
                        paddingTop:'8px',
                        paddingBottom:'3px',
                        color:'balck,',
                        position:'relative',
                        bottom:'15px',
                    }}
                    
                >
                 {description}   
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
        width: '280px',
        height: '250px',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2% 1% 6% 1%',
        // marginBottom: '22%',
        boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)',
        position:'relative',
        border: '1px solid rgba(0,0,0,0.1)',
        "&:hover":{
            transform: 'translate(-5px,-20px)'
        }
    },
    button:{
        
        padding:'1% 0% 1% 0%',
        backgroundColor:'hotpink',
        color:'white',
        textTransform:'initial',
        "&:hover":{
            backgroundColor:'#fc03d7'
        }
    },
    img:{
    
        width:'150px',
        height:'95px',
        marginTop:'12px',
        
    }
})
)


export default AppCard;
