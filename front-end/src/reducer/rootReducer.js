import { combineReducers } from "redux";
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducer'
export default combineReducers({
    auth: authReducer,
    forgotpass: forgotPasswordReducer,
})

