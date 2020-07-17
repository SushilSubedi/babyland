import fire from '../../../../config/fire';

export const WISHLIST_START = "WISHLIST_START";
export const WISHLIST_SUCCESS = "WISHLIST_SUCCESS";
export const WISHLIST_FAIL = "WISHLIST_FAIL";
export const WISHLIST_UPDATE = "WISHLIST_UPDATE";


export const wishlistStart = () => {
    return{
        type: WISHLIST_START
    }
}

export const wishlistError =  (error) => {
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

export const fetchWishlistData = () =>{
    return (dispatch) => {
        dispatch(wishlistStart());
        const userId = localStorage.getItem('userID');
        const cartData = [];
        fire.database().ref(`/cart/${userId}`).on("value",(snapshort)=>{
            const data = snapshort.val();
            //abstract keys from an object
            if(snapshort.val() !== null){
                const keys = Object.keys(data);
                    for(let i = 0; i < keys.length; i++){
                        const k = keys[i];
                        const dataCollection ={
                         name: data[k].name,
                         description: data[k].description,
                         value: data[k].value,
                         img: data[k].img,
                         id: data[k].id
                        }
                        cartData.push(dataCollection);
                        }
                        if(keys.length === cartData.length){
                            dispatch(wishlistSuccess(cartData));
                        }else {
                            const k = keys[keys.length - 1]
                            dispatch(updateData(data[k].name,data[k].description,data[k].value,data[k].img,data[k].id));
                    }
                }
          
        })
    }
}

const updateData = (name,description,value,img,id) => {
    const dataCollection ={
        name: name,
        description:description,
        value: value,
        img: img,
        id: id
       }
    return {
        type: WISHLIST_UPDATE,
        updatedData: dataCollection
    }
}