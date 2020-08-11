import * as actionType from './action';

const initialState = {
    loading: false,
    error: '',
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CART_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionType.CART_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case actionType.CART_UPDATE:
            const updateData = (state.data).slice();
            updateData.push(action.updatedData);
            return {
                ...state,
                data: updateData,
                loading: false
            }
        case actionType.CART_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case actionType.CART_DELETE:
            const duplicateData = (state.data).slice();
            duplicateData.filter(item => item.id !== action.id)
            console.log("updatedata", duplicateData);
            return {
                ...state,
                data: duplicateData,

            }
        default:
            return state
    }
}
export default reducer;