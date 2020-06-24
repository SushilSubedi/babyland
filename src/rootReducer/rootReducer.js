import { combineReducers } from 'redux';
import AuthRedux from '../components/Authentication/AuthRedux/AuthRedux';
import CosmeticRedux from '../components/Shop/ShopLists/Cosmetic/CosmeticReducer/CosmeticReducer';

const rootReducer = combineReducers({
AuthRedux,
CosmeticRedux
});

export default rootReducer;