import { combineReducers } from 'redux';
import coinReducer from './coinReducer'
import asyncReducer from './asyncReducer'
const rootReducer  = combineReducers({
    coinReducer,
    asyncReducer
});

export default rootReducer;

