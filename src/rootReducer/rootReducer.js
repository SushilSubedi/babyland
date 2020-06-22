import { combineReducers } from 'redux';
import AuthRedux from '../components/Authentication/AuthRedux/AuthRedux';
import CosmeticReducer from '../components/Shop/ShopLists/Cosmetic/CosmeticReducer/CosmeticReducer';

const rootReducer = combineReducers({
AuthRedux,
CosmeticReducer
});

export default rootReducer;