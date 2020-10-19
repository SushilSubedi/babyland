import { Box, makeStyles,createStyles,Card, CardActionArea, CardMedia, CardContent, Typography,Link } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Developer = (props) => {
    const classes = useStyles();
    const { image,role,name,link } =props;
    return(
        <Box className={classes.Developer}>
            <Card>
                <CardActionArea>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <CardMedia
                            className={classes.media}
                            image={image}
                        />
                    </div>
                    <CardContent className={classes.content}>
                        <Typography className={classes.name}>{name}</Typography>
                        <Typography className={classes.role}>{role} Developer</Typography>
                        <Typography className={classes.contact}>Contact me:</Typography>
                        <div className={classes.follow}>
                            <div className={classes.icon}><Link color="secondary" href={link.facebook} target="blank"><FacebookIcon/></Link></div>
                            <div className={classes.icon}><Link color="secondary" href={link.twitter} target="blank"><TwitterIcon/></Link></div>
                            <div className={classes.icon}><Link color="secondary"><InstagramIcon/></Link></div>
                            <div className={classes.icon}><Link color="secondary" href={link.linkedin} target="blank"><LinkedInIcon/></Link></div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

const useStyles = makeStyles(
    createStyles({
        Developer: {
            padding:'2% 3%',
            width:'400px',
            height:'400px'
        },
        media: {
            height:'240px',
            width:'200px'
        },
        follow: {
            display:'flex',
            justifyContent:'center',
            margin:'inherit'
        },
        content: {
            textAlign:'center',
            marginTop:'5px'
        },
        name:{
            margin:'inherit',
            fontSize:'24px',
            letterSpacing:'1px',
            cursor:'text'
        },
        role:{
            margin:'inherit',
            fontSize:'17px',
            letterSpacing:'1px',
            cursor:"text"
        },
        contact:{
            margin:'inherit',
            letterSpacing:'1px',
            fontSize:'15px',
            cursor:'text'
        },
        icon: {
            marginRight:'12px'
        }
    })
)

export default Developer;