import React,{useState} from 'react';

import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton } from '@material-ui/core';
import FilterDropDown from './FilterDropDown';


const Card = (props) => {
  const classes = useStyles();
  const [quantity,setQuantity] = useState('');
  
  return (
    <Box component={Paper} className={classes.card}>
      <Container className={classes.Container}>
        <div className={classes.itemslist}>
          <Button className={classes.remove}>
            Remove
                                                    
          </Button>
          <Button className={classes.quantity}>
            Quantity
          </Button>
          <div className={classes.select}>
            <FilterDropDown
              
              value={quantity}
              label= "select"
              onChange= {(e)=>setQuantity(e.target.value)}
              options= {[
              {value:'1',label:'1'},
              {value:'2',label:'2'},
              {value:'3',label:'3'},
              {value:'4',label:'4'},
              {value:'5',label:'5'},
              {value:'6',label:'6'},
              ]}

            />
          </div>
          
          <Button
              variant="contained"
              className={classes.button}>
                                            
              Checkout
          </Button>  

                                                          
                                                
                                              
        </div>   
                                         
                                         




      </Container>
                                     
    </Box>
          
  )
} 
const useStyles = makeStyles(
  createStyles({
      
      card: {
          display: 'flex',
          justifyContent: 'column',
          width: '460px',
          height: '435px',
          minHeight: '320px',
          padding: '2% 1% 4% 1%',
          margin: '1%',
          border: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)',
          marginLeft: "300px",  
          
      },
      
      itemslist:{
        display:"flex",
        justifyContent:"space-evenly",
      },

      remove:{
          fontSize:"20px",
          color:'black',
          positon:"relative",
          top:"280px",
          right:"30px",
          fontFamily:"sans-serif",
          backgroundColor:'#d21f3c',
          textTransform:'initial',
          fontSize:"20px",
          '&:hover': {
              backgroundColor:'red'
            }
          

      },
      price:{
          display:"flex",
          justifyContent:"space-around",
          position:"absolute",
          bottom:"762px",
          fontSize:"22px",
          left:"900px",
          color:'black',
      },
      button:{
          display:"flex",
          position:"relative",
          right:"110px",
          top:"400px",
          color:'black',
          fontSize:"22px",
          fontFamily:"sans-serif",
          backgroundColor:'pink',
          textTransform:'initial',
          fontSize:"20px",
          '&:hover': {
              backgroundColor:'hotpink'
          }
      },
      total:{
          display:"flex",
          justifyContent:"space-around",
          position:"absolute",
          bottom:"762px",
          right:"400px",
          fontSize:"22px",
          color:'black',
           
      },
      
      quantity:{
          fontSize:"18px",
          color:'black',
          position:"relative",
          top:"280px",
          left:"187px",
          fontFamily:"sans-serif",
          backgroundColor:'#eb6123',
          textTransform:'initial',
          fontSize:"20px",
          '&:hover': {
              backgroundColor:'#ffa500'
            }
          
          
      },

      select:{
        position:"relative",
        top:"320px",
        left:"160px",

      }
      


  })
)


  export default Card; 