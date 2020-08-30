import React, { useEffect } from 'react';
import { makeStyles, createStyles, Box, Container, Typography, Paper, Button } from '@material-ui/core';
import { fetchWishlistData } from './WishlistRedux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const WishList = (props) => {
    const dispatch = useDispatch();

    const classes = useStyles();

    const wishlistData = useSelector(state => state.WishlistRedux.data) || [];

    useEffect(() => {
        dispatch(fetchWishlistData());
    }, [dispatch])

    return (
        <Box padding="5% 2% 0% 2%">
            <Container>
                <div>
                    <Typography className={classes.wishlisttext}>
                        WishList
                    </Typography>
                </div>

                <div>
                    {wishlistData.map((item, index) => (
                        <Box component={Paper} className={classes.card}>
                            <Container className={classes.Container}>
                                <div>
                                    <img className={classes.img} src={item.img} alt="simple img" />

                                </div>

                                <div className={classes.details}>

                                    <Typography variant="h6" className={classes.Typography1}>{item.name}</Typography>
                                    <Typography className={classes.Typography2}>{item.description}</Typography>
                                    <Typography variant="h6" style={{ color: '#e85831', fontWeight: '1000', fontSize: "30px" }}>Rs{item.value}</Typography>

                                    <div className={classes.buttons}>
                                        <Button className={classes.remove} >Remove</Button>
                                        <Button className={classes.addtocart}>Addtocart</Button>
                                    </div>
                                </div>
                            </Container>
                        </Box>
                    ))}
                </div>
            </Container>
        </Box >




    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            display: 'flex',

            width: '700px',
            flexWrap: "wrap",
            overflow: "hidden",

            marginTop: "9%",
            marginLeft: "25%",
            minHeight: '200px',
            justifyContent: 'center',
            padding: '2% 1% 4% 1%',
            alignItems: 'center',

            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)'
        },
        img: {
            width: '200px',
            height: '300px',
            marginTop: '4px'
        },
        Container: {
            textAlign: 'center',
            display: "flex",
            flexDirection: "row",

        },


        addtocart: {
            padding: '2%',
            width: '130px',
            height: '50px',
            backgroundColor: 'hotpink',
            color: 'white',
            textTransform: 'initial',
            marginLeft: "50px",
            "&:hover": {
                backgroundColor: '#fc03d7'
            }
        },
        Typography1: {
            fontFamily: 'inherit',
            fontWeight: '900',
            color: '#00669b',
            fontSize: "35px",
            marginBottom: "15px",
        },
        Typography2: {
            fontSize: '25px',
            fontWeight: '400',
            fontFamily: 'inherit',
            color: 'cbd0d6',
            marginBottom: "10px",
        },
        remove: {
            padding: '2%',
            width: '130px',
            height: '50px',
            backgroundColor: '#808080',
            color: 'white',
            marginRight: "50px",
            textTransform: 'initial',
            "&:hover": {
                backgroundColor: 'red'
            }

        },

        wishlisttext: {
            fontSize: "25px",
            color: "blue",
            marginLeft: "50%"
        },

        details: {
            display: "flex",
            flexDirection: "column",

        },
        buttons: {
            display: "inline-block",
            marginTop: "70px",


        },


    })
)



export default WishList;