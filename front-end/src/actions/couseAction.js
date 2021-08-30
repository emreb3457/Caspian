import { API_BASE } from '../config/env'
import axioss from "axios"
import {
    ALL_COURSE_REQUEST,
    ALL_COURSE_SUCCESS,
    ALL_COURSE_FAIL,
    ADMIN_COURSE_REQUEST,
    ADMIN_COURSE_SUCCESS,
    ADMIN_COURSE_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    NEW_COURSE_FAIL,
    DELETE_COURSE_REQUEST,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAIL,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAIL,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,

    CLEAR_ERRORS

} from '../constants/courseContants'

const axios = axioss.create({
    withCredentials: true,
    baseURL: API_BASE
})

export const getAdminCourse = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_COURSE_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/course`)

        dispatch({
            type: ADMIN_COURSE_SUCCESS,
            payload: data.course
        })

    } catch (error) {

        dispatch({
            type: ADMIN_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getCourse = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_COURSE_REQUEST })

        let link = `${API_BASE}/api/v1/course`


        const { data } = await axios.get(link)

        dispatch({
            type: ALL_COURSE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newCourse = (courseData) => async (dispatch) => {
    try {
        console.log(courseData)
        dispatch({ type: NEW_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/course/new`, courseData, config)

        dispatch({
            type: NEW_COURSE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete course (Admin)
export const deleteCourse = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_COURSE_REQUEST })

        const { data } = await axios.delete(`${API_BASE}/api/v1/admin/course/${id}`)

        dispatch({
            type: DELETE_COURSE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Course (ADMIN)
export const updateCourse = (id, name,price,description,category) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`${API_BASE}/api/v1/admin/course/${id}`, {name,price,description,category}, config)

        dispatch({
            type: UPDATE_COURSE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getCourseDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: COURSE_DETAILS_REQUEST })

        const { data } = await axios.get(`${API_BASE}/api/v1/course/${id}`)

        dispatch({
            type: COURSE_DETAILS_SUCCESS,
            payload: data.course
        })

    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
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