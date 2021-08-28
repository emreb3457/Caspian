import { combineReducers } from "redux";
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducer'
import { coursiesReducer, courseDetailsReducer, newcourseReducer, courseReducer } from './courseRecuder'
export default combineReducers({
    auth: authReducer,
    forgotpass: forgotPasswordReducer,
    coursies: coursiesReducer,
    courseDetails: courseDetailsReducer,
    newCourse: newcourseReducer,
    course: courseReducer,
})

