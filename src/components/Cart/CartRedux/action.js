import fire from '../../../config/fire';

export const CART_START = "CART_START";
export const CART_SUCCESS = "CART_SUCCESS";
export const CART_FAIL = "CART_FAIL";
export const CART_UPDATE = "CART_UPDATE";


export const cartStart = () => {
    return{
        type: CART_START
    }
}

export const cartError =  (error) => {
    return {
        type: CART_FAIL,
        error: error
    }
}

export const cartSuccess = (data) => {
    return {
        type: CART_SUCCESS,
        data: data
    }
}

export const fetchCartData = () =>{
    return (dispatch) => {
        try {
            dispatch(cartStart());
        const userId = localStorage.getItem('userID');
        const cartData = [];
        fire.database().ref(`/cart/${userId}`).on("value",(snapshort)=>{
            const data = snapshort.val();
            //abstract keys from an object
            // const DataArray = Object.assign([],data);
            if(snapshort.val() !== null){
                const keys = Object.keys(data);
                        // console.log("p",keys.length/ === .length)
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
                            dispatch(cartSuccess(cartData));

                        } else {
                            const k = keys[keys.length - 1]
                            const dataCollections={
                               name: data[k].name,
                               description: data[k].description,
                                value:data[k].value,
                                img: data[k].img,
                                id: data[k].id
                            }
                            dispatch(updateData(dataCollections));
                    }
                }
          
        })
        }catch(error){
            dispatch(cartError(error));
        }
        
    }
}

const updateData = (updatedData) => {
    return {
        type: CART_UPDATE,
        updatedData: updatedData
    }
}
