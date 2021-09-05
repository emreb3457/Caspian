// Login
import axioss from 'axios'
import { API_BASE } from "../config/env"
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    ALL_USERS_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    CLEAR_ERRORS
} from '../constants/userContants'

const axios = axioss.create({
  withCredentials: true,
  baseURL: API_BASE
})


export const loginac = (email, password,rm) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST })


        const { data } = await axios.post(`${API_BASE}/api/v1/login`, { email, password,rm }, { withCredentials: true })

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// Register user
export const register = (name, email, password) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST })



        const { data } = await axios.post(`${API_BASE}/api/v1/register`, { name, email, password }, { withCredentials: true })

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Load user
export const loadUser = () => async (dispatch) => {

    try {

        dispatch({ type: LOAD_USER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',

            },
           
        }

        const { data } = await axios.get(`${API_BASE}/api/v1/me`, config)

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// // Update profile
// export const updateProfile = (userData) => async (dispatch) => {
//     try {

//         dispatch({ type: UPDATE_PROFILE_REQUEST })

//         const config = {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         }

//         const { data } = await axios.put('/api/v1/me/update', userData, config)

//         dispatch({
//             type: UPDATE_PROFILE_SUCCESS,
//             payload: data.success
//         })

//     } catch (error) {
//         dispatch({
//             type: UPDATE_PROFILE_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// // Update password
// export const updatePassword = (passwords) => async (dispatch) => {
//     try {

//         dispatch({ type: UPDATE_PASSWORD_REQUEST })

//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }

//         const { data } = await axios.put('/api/v1/password/update', passwords, config)

//         dispatch({
//             type: UPDATE_PASSWORD_SUCCESS,
//             payload: data.success
//         })

//     } catch (error) {
//         dispatch({
//             type: UPDATE_PASSWORD_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// Forgot password
export const forgotPassword = (email) => async (dispatch) => {
    try {

        dispatch({ type: FORGOT_PASSWORD_REQUEST })


        const { data } = await axios.post(`${API_BASE}/api/v1/password/forgot`, {email})

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Reset password
export const resetPassword = (token, password, confirmPassword) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`${API_BASE}/api/v1/password/reset/${token}`, { password, confirmPassword }, config)

        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Logout user
export const logout = () => async (dispatch) => {
    try {

        await axios.get('/api/v1/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get all users
export const allUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/users')

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.users
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}


// Delete user - ADMIN
export const deleteUser = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_USER_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/user/${id}`)

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}