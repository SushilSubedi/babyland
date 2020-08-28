import React, { useEffect } from 'react';
import { makeStyles, createStyles, Box, Container, Typography, Paper, Button } from '@material-ui/core';
import { fetchWishlistData } from './WishlistRedux/action';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';


const WishList = (props) => {
    const dispatch = useDispatch();
    const { name, description, img, price } = props;
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchWishlistData());
    }, [dispatch])
    return (
        <div>
            <div>
                <Box>
                    <Typography>
                        Wishlist
                    </Typography>
                </Box>

            </div>

            <div>
                <Box component={Paper} className={classes.card}>
                    <Container className={classes.Container}>
                        <img className={classes.img} src={img} alt="simple img" />

                        <div style={{ padding: '2% 0%' }}>
                            <Typography variant="h6" className={classes.Typography1}>{name}</Typography>
                            <Typography className={classes.Typography2}>{description}</Typography>
                        </div>

                        <div>
                            <Typography variant="h6" style={{ color: '#e85831', fontWeight: '700' }}>Rs{price}</Typography>

                            <div className={classes.features}>
                                <div style={{ marginTop: "5%" }}>
                                    <DeleteIcon className={classes.remove} />
                                </div>

                                <Button className={classes.addtocart}>Addtocart</Button>

                            </div>
                        </div>
                    </Container>
                </Box>


            </div>


        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            display: 'flex',
            flowDirection: 'column',
            width: '320px',
            flexWrap: "wrap",
            overflow: "hidden",

            marginTop: "9%",
            minHeight: '320px',
            justifyContent: 'center',
            padding: '2% 1% 4% 1%',
            alignItems: 'center',

            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.11)'
        },
        img: {
            width: '150px',
            height: '140px',
            marginTop: '4px'
        },
        Container: {
            textAlign: 'center',

        },
        features: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        addtocart: {
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
        remove: {
            fontSize: "35px",
            color: "#a6a1a1",

            "&:hover": {
                color: "red"
            }

        }


    })
)



export default WishList;