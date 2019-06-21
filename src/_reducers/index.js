import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { priceChanges } from './priceChanges.reducer';
const rootReducer = combineReducers({
    authentication,
    priceChanges
});
export default rootReducer;