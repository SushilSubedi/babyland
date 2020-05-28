import * as actionType from './action';

const initialState = {
    loading:false,
    user:'',
    userID:'',
    error:'',
    refreshToken:'',
    authRedirectPath:'/'
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionType.AUTH_START:
            return{
                ...state,
                error: null,
                loading: true
            }
        case actionType.AUTH_SUCCESS:
            return{
                ...state,
                user: action.user,
                userID: action.userID,
                refreshToken: action.refreshToken,
                loading:false
            }
        case actionType.AUTH_FAIL:
            return{
                ...state,
                error: action.error,
                loading:false
            }
        case actionType.AUTH_LOGOUT:
            return{
                ...state,
                refreshToken:null,
                user:null
            }
        case actionType.SET_AUTH_REDIRECT:
            return{
                ...state,
                authRedirectPath:action.path
            }    
        default:
            return state            
    }
}
export default reducer;