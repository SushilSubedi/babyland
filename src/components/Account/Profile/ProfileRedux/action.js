import fire from '../../../../config/fire';

export const PROFILE_START = 'PROFILE_START';
export const PROFILE_PIC = 'PROFILE_PIC';
export const PROFILE_FAIL = 'PROFILE_FAIL';
export const PROFILE_ADDRESS = 'PROFILE_ADDRESS'

export const profileStart = () => {
    return {
        type: PROFILE_START,
    }
}

export const profileError = (error) => {
    return {
        type: PROFILE_FAIL,
        error: error
    }
}

export const profileImg = (Img) => {
    return {
        type: PROFILE_PIC,
        Img: Img
    }
}

export const profileAddress = (address) => {
    return {
        type: PROFILE_ADDRESS,
        address:address
    }
}

export const uploadImgHandle = (uploadImg) => {
    return (dispatch) => {
        dispatch(profileStart())
        const userID = localStorage.getItem('userID');
            fire.auth().onAuthStateChanged(firebaseUser => {
                if(firebaseUser){
                    fire.storage().ref('users/'+ userID +'/profile.jpg').put(uploadImg).then(result =>{
                        const updateData = {};
                        const data = {
                            userID: userID,
                            profile: true
                        }
                        updateData[`/ProfilePic/` + userID ] = data;
                        fire.database().ref().update(updateData).then(updated =>{
                            profilePicDownload();
                        });
                    })
                }
            })   
    }
}



 export const profilePicDownload = () => {
     return (dispatch) =>{
            dispatch(profileStart());
        const userID = localStorage.getItem('userID');
        fire.database().ref(`/ProfilePic/${userID}`).once('value',snapshot => {
            if(snapshot.val().userID === userID){
                fire.storage().ref('users/'+ userID + '/profile.jpg').getDownloadURL().then(url => {
                    dispatch(profileImg(url));
                }).catch(error => {
                    dispatch(profileError(error));
                })
            }
        })
     }
}


export const updatedAddressHandle = (streetAddress,addressLine,city,zipCode,phoneNumber) => {
    return (dispatch) => {
        const userID = localStorage.getItem('userID');
        const updateData = {};
        const data = {
            streetAddress: streetAddress,
            AddressLine: addressLine,
            city: city,
            zipCode: zipCode,
            phoneNumber: phoneNumber
        }
        updateData[`/Profile/` + userID ] = data;
       return fire.database().ref(`/Profile/` + userID).update(data).then(val =>{
           dispatch(profileAddress(data))
       }); 
    }
}


export const fetchAddressHandler = () => {
    return (dispatch) => {
        const userID = localStorage.getItem('userID');
        fire.database().ref(`/Profile/${userID}`).once('value', (snapshot) => {
            if(snapshot.exists()){
                const data = snapshot.val();
                const address = {
                    streetAddress: data.streetAddress,
                    AddressLine: data.addressLine,
                    city: data.city,
                    zipCode: data.zipCode,
                    phoneNumber: data.phoneNumber
                }
                dispatch(profileAddress(address));
            }
        })
    }
}

