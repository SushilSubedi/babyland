import * as actionType from './action';

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionType.COSMETIC_START:
            return{
                ...state,
                error: null,
                loading: true
            }
        case actionType.COSMETIC_SUCCESS:
            return{
                ...state,
                user: action.user,
                userID: action.userID,
                refreshToken: action.refreshToken,
                loading:false
            }
        case actionType.COSMETIC_FAIL:
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