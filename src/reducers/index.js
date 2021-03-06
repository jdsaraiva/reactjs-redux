import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from "redux";

const allReducers = combineReducers({
    // we could also just have...
    // counterReducer that is the same as counterReducer: counterReducer
    counter: counterReducer,
    isLogged: loggedReducer,
})

export default allReducers