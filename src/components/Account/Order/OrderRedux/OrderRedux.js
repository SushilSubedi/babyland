import * as actionType from './action';

const initialState = {
    loading: false,
    error: '',
    data: []
}

 const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.ORDER_START: 
        return {
            ...state,
            error:null,
            loading:true
        }
        case actionType.ORDER_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading:false
            }
        case actionType.ORDER_UPDATE:
            const updateData = state.data.slice();
            updateData.push(action.order);
            return {
                ...state,
                data:updateData
            }    
        default:
            return state
    }
}

export default reducer;