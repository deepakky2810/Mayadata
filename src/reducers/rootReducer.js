import { combineReducers } from 'redux';
import flags from './flags';
import rowsArray from './rowsArray';


const rootReducer = combineReducers({
    flags,
    rowsArray,
});

export default rootReducer;
