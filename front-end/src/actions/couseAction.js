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
    DELETE_CHAPTER_FAIL,
    DELETE_CHAPTER_REQUEST,
    DELETE_CHAPTER_SUCCESS,
    UPDATE_CHAPTER_SUCCESS,
    UPDATE_CHAPTER_REQUEST,
    UPDATE_CHAPTER_FAIL,


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
export const updateCourse = (id, name, price, description, category, publish, events) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`${API_BASE}/api/v1/admin/course/${id}`, { name, price, description, category, publish, events }, config)

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
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
// New Chapter(ADMIN)
export const newChapter = (id, title) => async (dispatch) => {
    try {

        dispatch({ type: NEW_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post(`/api/v1/admin/chapter/${id}`, { title }, config)

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

// New downloadFile(ADMIN)
export const newdownloadFile = (fileData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post(`/api/v1/admin/course/download`, fileData, config)

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
// Delete downloadFile (Admin)
export const deleteDownloadFile = (id, courseId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_CHAPTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post(`/api/v1/admin/course/download/delete`, { id, courseId }, config)

        dispatch({
            type: DELETE_CHAPTER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_CHAPTER_FAIL,
            payload: error.response.data.message
        })
    }
}
// New Lesson(ADMIN)
export const newLesson = (lessonData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post(`/api/v1/admin/lesson/new`, lessonData, config)

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
// Delete lesson (Admin)
export const deleteLesson = (id, courseId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_CHAPTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post(`/api/v1/admin/lesson/delete`, { id, courseId }, config)

        dispatch({
            type: DELETE_CHAPTER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_CHAPTER_FAIL,
            payload: error.response.data.message
        })
    }
}
// Delete chapter (Admin)
export const deleteChapter = (id, chapterId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_CHAPTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'chapterId': chapterId
            }
        }

        const { data } = await axios.delete(`${API_BASE}/api/v1/admin/chapter/${id}`, config)

        dispatch({
            type: DELETE_CHAPTER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_CHAPTER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Chapter (ADMIN)
export const updateChapter = (id, title, chapterId) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_CHAPTER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`${API_BASE}/api/v1/admin/chapter/${id}`, { title, chapterId }, config)

        dispatch({
            type: UPDATE_CHAPTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_CHAPTER_FAIL,
            payload: error.response.data.message
        })
    }
}
// Set register
export const coursesetRegister = (courseId) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${API_BASE}/api/v1/course/register`, { courseId }, config)

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
// Set unregister //put
export const courseunRegister = (courseId, usrId) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`${API_BASE}/api/v1/course/register`, { courseId, usrId }, config)

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
// Set continuing Course
export const setOpen = (id, usrId) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_COURSE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`${API_BASE}/api/v1/admin/course/setopen/${id}`, { usrId }, config)

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
// Update Lesson Watch (ADMIN)
export const setlessonWatch = (lessonId) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_CHAPTER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`${API_BASE}/api/v1/course/setwatch`, {lessonId }, config)

        dispatch({
            type: UPDATE_CHAPTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_CHAPTER_FAIL,
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
