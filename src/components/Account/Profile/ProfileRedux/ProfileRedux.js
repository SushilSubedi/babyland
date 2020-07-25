import * as actionType from './action';

const initialState = {
    loading: false,
    error: '',
    Img: '',
    address: [],
    emailVerified: false
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionType.PROFILE_START:
            return{
                ...state,
                error: null,
                loading: true
            }
        case actionType.PROFILE_PIC:
            return {
                ...state,
                Img: action.Img,
                loading: false
            }
        case actionType.PROFILE_ADDRESS:
            return {
                ...state,
                address: action.address,
                loading: false
            }
        case actionType.PROFILE_EMAIL_VERIFY:
            return {
                ...state,
                emailVerified: action.emailVerified
            }        
        case actionType.PROFILE_FAIL:
            return{
                ...state,
                error: action.error,
                loading:false
            }  
        default:
            return state            
    }
}
export default reducer;