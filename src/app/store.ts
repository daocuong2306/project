import { productReducer } from '@/reducers/productsReducer';
import { userReducer } from '@/reducers/userReducer';
import { legacy_createStore as createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    user : userReducer,
    products:productReducer
})
const store = createStore(rootReducer);
export default store 