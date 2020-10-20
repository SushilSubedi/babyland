import fire from '../../../../config/fire';
import { imageUrlHandler } from '../../../Shop/ShopLists/Shampoo/ShampooRedux/action';

export const DEVELOPER_START = "DEVELOPER_START";
export const DEVELOPER_SUCCESS = "DEVELOPER_SUCCESS";
export const DEVELOPER_FAIL = "DEVELOPER_FAIL";


export const developerStart = () => {
    return {
        type: DEVELOPER_START
    }
}
export const developerFail = (error) => {
    return {
        type: DEVELOPER_FAIL,
        error:error
    }
}
export const developerSuccess = (data) => {
    return {
        type: DEVELOPER_SUCCESS,
        data:data
    }
}


export const developer = () => {
    return (dispatch) => {
        dispatch(developerStart());
        const imgList = [];
        const data = [];
        fire.database().ref().child("Developer").once("value").then(response => {
           response.val().forEach((element) => {
            const promise = imageUrlHandler(element.image).then(url => {
                return url;
            }).catch(error => dispatch(developerFail(error)));
            imgList.push(promise);
            Promise.all(imgList).then(items => {
                const dataCollection = {
                    image:items[items.length - 1],
                    link:element.link,
                    name:element.name,
                    role:element.role
                }
                data.push(dataCollection);
                if(data.length === response.val().length){
                    console.log(data);
                    dispatch(developerSuccess(data));
                }
            })
           })
            // imageUrlHandler()
        })
    }
}