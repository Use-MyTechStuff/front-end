import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logOutReducer from './loginReducer';
import signUpReducer from './signUpReducer'
import campaignFormReducer from './campaignFormReducer'

const rootReducer = combineReducers({
    loginReducer,
    logOutReducer,
    signUpReducer,
    campaignFormReducer
});

export default rootReducer;