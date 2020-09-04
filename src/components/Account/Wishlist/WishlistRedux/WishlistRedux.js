import * as actionType from './action';

const initialState = {
    loading: false,
    error: '',
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.WISHLIST_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionType.WISHLIST_SUCCESS:
            console.log("action", action.data);
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case actionType.WISHLIST_UPDATE:
            const updateData = (state.data).slice();
            updateData.push(action.updatedData);
            return {
                ...state,
                data: updateData,
                loading: false
            }
        case actionType.WISHLIST_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case actionType.WISHLIST_DELETE:
            const duplicateData = (state.data).slice();
            const DeletedData = duplicateData.filter(item => item.postId !== action.postId)
            return {
                ...state,
                data: DeletedData
            }
        default:
            return state
    }
}
export default reducer;