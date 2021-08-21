// import { LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from "../actions/userAction";
// import { REGISTER_FULFILLED, REGISTER_PENDING, REGISTER_REJECTED } from "../actions/userAction";
// import { VERIFICATION_FULFILLED, VERIFICATION_PENDING, VERIFICATION_REJECTED } from "../actions/userAction";
// import { GETUSER_FULFILLED, GETUSER_PENDING, GETUSER_REJECTED } from "../actions/userAction";
// import { UPDATE_FULFILLED, UPDATE_PENDING, UPDATE_REJECTED } from "../actions/userAction";
// import { UPLOAD_FULFILLED, UPLOAD_PENDING, UPLOAD_REJECTED } from "../actions/userAction";
// import { ADMINGETALLUSER_FULFILLED, ADMINGETALLUSER_PENDING, ADMINGETALLUSER_REJECTED } from "../actions/userAction";
// import { ADMINREMOVEUSER_FULFILLED, ADMINREMOVEUSER_PENDING, ADMINREMOVEUSER_REJECTED } from "../actions/userAction";
// const initialState = {
//     fetch: null
// }
// export default (state = initialState, action) => {
//     switch (action.type) {
//         case GETUSER_PENDING:
//             return { fetch: true }
//         case GETUSER_FULFILLED:
//             return { ...action.payload, fetch: false }
//         case GETUSER_REJECTED:
//             return { ...action.payload, fetch: false }
//         //----------------
//         case LOGIN_PENDING:
//             return { fetch: true }
//         case LOGIN_FULFILLED:
//             return { ...state, isLogin: action.payload, fetch: false }
//         case LOGIN_REJECTED:
//             return { ...state, ...action.payload, fetch: false }
//         //----------------
//         case REGISTER_PENDING:
//             return { fetch: true }
//         case REGISTER_FULFILLED:
//             return { ...state, isLogin: action.payload, fetch: false }
//         case REGISTER_REJECTED:
//             return { ...state, ...action.payload, fetch: false }
//         //---------------
//         case UPDATE_PENDING:
//             return { ...state, fetch: true }
//         case UPDATE_FULFILLED:
//             return { ...state, isUpdate: true, ...action.payload, fetch: false }
//         case UPDATE_REJECTED:
//             return { ...state, ...action.payload, fetch: false }
//         //---------------
//         case VERIFICATION_PENDING:
//             return { fetch: true }
//         case VERIFICATION_FULFILLED:
//             return { ...state, ...action.payload, fetch: false }
//         case VERIFICATION_REJECTED:
//             return { ...state, ...action.payload, fetch: false }
//         //---------------
//         case UPLOAD_PENDING:
//             return { ...state, fetch: true }
//         case UPLOAD_FULFILLED:
//             return { ...state, isUpdate: true, ...action.payload, fetch: false }
//         case UPLOAD_REJECTED:
//             return { ...state, ...action.payload, fetch: false }
//         //---------------
//         case ADMINGETALLUSER_PENDING:
//             return { ...state, fetch: true }
//         case ADMINGETALLUSER_FULFILLED:
//             return { ...state, admingetalluser: { ...action.payload }, fetch: false }
//         case ADMINGETALLUSER_REJECTED:
//             return { ...action.payload, fetch: false }
//         //----------------------------------
//         case ADMINREMOVEUSER_PENDING:
//             return { ...state, fetch: true }
//         case ADMINREMOVEUSER_FULFILLED:
//             return { ...state, isRemove: { ...action.payload }, fetch: false }
//         case ADMINREMOVEUSER_REJECTED:
//             return { ...action.payload, fetch: false }
//         default:
//             return state
//     }
// }
