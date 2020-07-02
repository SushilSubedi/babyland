import React,{useState} from 'react';
import { makeStyles,createStyles,Box, Container, Typography,Paper, Button,IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ShopCard = (props) =>{
    const [icon,setIcon] = useState(false);

    const classes = useStyles();
    const { name,description,img,price } = props;
    
    const onClickIcon = () =>{
        if(icon === false){
            setIcon(true);
        }else{
            setIcon(false);
        }
    }
    return(
       <Box component={Paper} className={classes.card}>
           <Container className={classes.Container}>
                <img className={classes.img} src={img} alt="simple img"/>
                <div style={{padding:'2% 0%'}}>
                    <Typography variant="h6" className={classes.Typography1}>{name}</Typography>
                    <Typography className={classes.Typography2}>{description}</Typography>
                </div>
                <div>
                    <Typography variant= "h6" style={{color:'#e85831',fontWeight:'700'}}>Rs.{price}</Typography>
                    <div className={classes.cartWishlist}>
                        <div>
                           <IconButton classes ={{root: classes.root}} onClick={onClickIcon}>
                            {!icon ? <FavoriteBorderIcon color= "primary" fontSize= "large"/> : <FavoriteIcon color= "primary" fontSize="large"/>}
                            </IconButton>
                        </div>
                        <div>
                            <Button className={classes.button}>Add to cart</Button>
                        </div>
                    </div>
                </div>
           </Container>
       </Box>
    )
};

const useStyles = makeStyles(
    createStyles({
        card: {
            display: 'flex',
            flowDirection: 'column',
             width: '320px',
            // height: '340px',
            minHeight:'320px',
            justifyContent:'center',
            padding: '2% 1% 4% 1%',
            alignItems: 'center',
            margin:'4% 3%',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)'
        },
        img:{
            width: '150px',
            height: '140px',
            marginTop: '4px'
        },
        Container: {
            textAlign: 'center'
        },
        cartWishlist: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        button:{
            padding:'2%',
            width:'94px',
            height:'35px',
            backgroundColor:'hotpink',
            color:'white',
            textTransform:'initial',
            "&:hover":{
                backgroundColor:'#fc03d7'
            }
        },
        Typography1: {
            fontFamily:'inherit',
            fontWeight:'700',
            color:'#00669b'
        },
        Typography2: {
            fontSize: '14px',
            fontWeight: '300',
            fontFamily: 'inherit',
            color: 'cbd0d6'
        },
        root: {
            padding: '0px'
        }
    })
)

export default ShopCard;