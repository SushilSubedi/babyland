import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Box, Container, Typography, Paper, Button, IconButton, Snackbar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import fire from '../../../../../config/fire';
import { Alert } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogBox from '../../../../../GlobalComponents/DialogBox';
import { useHistory } from 'react-router-dom';

const ShopCard = (props) => {
    const [icon, setIcon] = useState(false);
    const [OpenToolTip, setOpenToolTip] = useState(false);
    const [loading, setLoading] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false)
    const [label, setLabel] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    const { name, description, img, price, identifer, Token, WishlistData, CartData, postId } = props;

    const wishlistData = WishlistData;
    const token = Token;
    const cartData = CartData;
    const element = cartData.find(element => element.id === identifer);
    const wishlistElement = wishlistData.find(element => element.id === identifer);

    const onClickIcon = (cartWishlist, img, name, description, value) => {
        if (icon === false) {
            setIcon(true);
            AddToCardWishlistHandler(cartWishlist, img, name, description, value);
        }
        // else{
        //     setIcon(false);
        // }

    }

    useEffect(() => {
        if (element !== undefined) {
            setLoading(false);
        }
    }, [element]);

    useEffect(() => {
        if (wishlistElement !== undefined) {
            setWishlistLoading(false);
        }
    }, [wishlistElement]);

    const AddToCardWishlistHandler = (cartWishlist, img, name, description, value) => {
        if (token.length !== 0) {
            if (cartWishlist === 'cart') {
                setLoading(true)
            } else if (cartWishlist === 'wishlist') {
                setWishlistLoading(true)
            }
            setLabel(cartWishlist);
            const userId = localStorage.getItem('userID');
            if (element === undefined || wishlistElement === undefined) {
                const newPostKey = fire.database().ref().child(cartWishlist).push().key;
                const updateData = {};
                const data = {
                    postId: newPostKey,
                    name: name,
                    description: description,
                    value: value,
                    img: img,
                    id: identifer,
                    quantity: 1,
                    cartWishlist: cartWishlist
                }
                setOpenToolTip(true);
                updateData[`/${cartWishlist}/` + userId + '/' + newPostKey] = data;
                return fire.database().ref().update(updateData);
            }
        } else {
            setOpenDialog(true);
        }
    };

    const DialogCloseHandler = () => {
        setOpenDialog(false)
    }
    const HandleAuthNavigation = () => {
        history.push('/Authentication')
    }

    useEffect(() => {
        if (wishlistElement !== undefined) {
            setIcon(true)
        }
    }, [wishlistElement])

    return (
        <Box component={Paper} className={classes.card}>
            <Container className={classes.Container}>
                <img className={classes.img} src={img} alt="simple img" />
                <div style={{ padding: '2% 0%' }}>
                    <Typography variant="h6" className={classes.Typography1}>{name}</Typography>
                    <Typography className={classes.Typography2}>{description}</Typography>
                </div>
                <div>
                    <Typography variant="h6" style={{ color: '#e85831', fontWeight: '700' }}>Rs.{price}</Typography>
                    <div className={classes.cartWishlist}>
                        <div style={{ position: 'relative' }}>
                            <IconButton classes={{ root: classes.root }} disabled={wishlistLoading} onClick={() => onClickIcon("wishlist", img, name, description, price)}>
                                {!icon ? <FavoriteBorderIcon color="primary" fontSize="large" /> : <FavoriteIcon color="primary" fontSize="large" />}
                            </IconButton>
                            {wishlistLoading === true && <CircularProgress className={classes.loader} />}
                        </div>
                        <div style={{ position: 'relative' }}>
                            {element === undefined ? <Button className={classes.button} disabled={loading} onClick={() => AddToCardWishlistHandler("cart", img, name, description, price)}>Add to cart</Button> :
                                <Button disabled style={{ cursor: 'none' }}>Added</Button>
                            }
                            {loading === true && <CircularProgress className={classes.loader} />}
                            <Snackbar open={OpenToolTip} onClose={() => setOpenToolTip(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={4000}><Alert variant="filled" severity="success" style={{ background: 'black' }}>Item is added to your {label}</Alert></Snackbar>
                        </div>
                    </div>
                </div>
                <DialogBox
                    open={openDialog}
                    handleClose={DialogCloseHandler}
                    DialogTitles={"LOGIN REQUIRED"}
                    DialogContents={"Placing a order will required signIn,Would you like to login first?"}
                    handleNavigation={HandleAuthNavigation}
                />
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
            minHeight: '320px',
            justifyContent: 'center',
            padding: '2% 1% 4% 1%',
            alignItems: 'center',
            margin: '4% 3%',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)'
        },
        img: {
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
        button: {
            padding: '2%',
            width: '94px',
            height: '38px',
            backgroundColor: 'hotpink',
            color: 'white',
            textTransform: 'initial',
            "&:hover": {
                backgroundColor: '#fc03d7'
            }
        },
        loader: {
            position: 'absolute',
            top: '5px',
            left: '31%',
            color: 'white',
            width: '30px !important',
            height: '30px !important'
        },
        Typography1: {
            fontFamily: 'inherit',
            fontWeight: '700',
            color: '#00669b'
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