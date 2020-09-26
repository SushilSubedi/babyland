import fire from '../../../../config/fire';

export const WISHLIST_START = "WISHLIST_START";
export const WISHLIST_SUCCESS = "WISHLIST_SUCCESS";
export const WISHLIST_FAIL = "WISHLIST_FAIL";
export const WISHLIST_UPDATE = "WISHLIST_UPDATE";
export const WISHLIST_DELETE = "WISHLIST_DELETE";


export const wishlistStart = () => {
    return {
        type: WISHLIST_START
    }
}

export const wishlistError = (error) => {
    return {
        type: WISHLIST_FAIL,
        error: error
    }
}

export const wishlistSuccess = (data) => {
    return {
        type: WISHLIST_SUCCESS,
        data: data
    }
}

export const fetchWishlistData = () => {
    return (dispatch) => {
        try {
            dispatch(wishlistStart());
            const userId = localStorage.getItem('userID');
            const wishlistData = [];
            fire.database().ref(`/wishlist/${userId}`).once("value", (snapshort) => {
                const data = snapshort.val();
                //abstract keys from an object
                // const DataArray = Object.assign([],data);
                if (snapshort.val() !== null) {
                    const keys = Object.keys(data);
                    // console.log("p",keys.length/ === .length)
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        const dataCollection = {
                            name: data[k].name,
                            description: data[k].description,
                            value: data[k].value,
                            img: data[k].img,
                            id: data[k].id,
                            postId: data[k].postId,
                            quantity: data[k].quantity
                        }
                        wishlistData.push(dataCollection);
                    }
                    dispatch(wishlistSuccess(wishlistData));

                }

            })
        } catch (error) {
            dispatch(wishlistError(error));
        }

    }
}

export const wishlistDeleteData = (postId) => {
    return {
        type: WISHLIST_DELETE,
        postId: postId
    }
}

export const wishlistUpdateData = (updatedData) => {
    return {
        type: WISHLIST_UPDATE,
        updatedData: updatedData
    }
}

