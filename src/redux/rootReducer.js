import { combineReducers } from 'redux';
import checkInReducer from '../containers/checkIn/reducer';

const rootReducer = combineReducers({
    checkInReducer,
})

export default rootReducer;