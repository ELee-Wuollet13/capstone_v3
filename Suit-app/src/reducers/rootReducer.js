import { combineReducers } from 'redux'
import suitsReducer from './suitsReducer'

const rootReducer = combineReducers({
    suits: suitsReducer
});

export default rootReducer;
