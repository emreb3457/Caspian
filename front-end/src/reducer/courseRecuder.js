import {
    ALL_COURSE_REQUEST,
    ALL_COURSE_SUCCESS,
    ALL_COURSE_FAIL,
    ADMIN_COURSE_REQUEST,
    ADMIN_COURSE_SUCCESS,
    ADMIN_COURSE_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    NEW_COURSE_RESET,
    NEW_COURSE_FAIL,
    DELETE_COURSE_REQUEST,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_RESET,
    DELETE_COURSE_FAIL,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_RESET,
    UPDATE_COURSE_FAIL,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    DELETE_CHAPTER_SUCCESS,
    DELETE_CHAPTER_RESET,
    DELETE_CHAPTER_REQUEST,
    DELETE_CHAPTER_FAIL,
    UPDATE_CHAPTER_RESET,
    UPDATE_CHAPTER_FAIL,
    UPDATE_CHAPTER_REQUEST,
    UPDATE_CHAPTER_SUCCESS,
    COURSE_DETAILS_RESET,

    CLEAR_ERRORS

} from '../constants/courseContants'

export const coursiesReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case ALL_COURSE_REQUEST:
        case ADMIN_COURSE_REQUEST:
            return {
                loading: true,
                courses: []
            }

        case ALL_COURSE_SUCCESS:
            return {
                loading: false,
                courses: action.payload.courses,
                coursesCount: action.payload.coursesCount,

            }

        case ADMIN_COURSE_SUCCESS:
            return {
                loading: false,
                coursies: action.payload
            }

        case ALL_COURSE_FAIL:
        case ADMIN_COURSE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newcourseReducer = (state = { course: {} }, action) => {
    switch (action.type) {

        case NEW_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_COURSE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                course: action.payload
            }

        case NEW_COURSE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_COURSE_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const courseReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_COURSE_REQUEST:
        case UPDATE_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_COURSE_FAIL:
        case UPDATE_COURSE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_COURSE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_COURSE_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const courseDetailsReducer = (state = { course: {},lesson:{} }, action) => {
    switch (action.type) {

        case COURSE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case COURSE_DETAILS_SUCCESS:
            return {
                loading: false,
                course: action.payload.course,
                lesson:action.payload.courseLesson
            }

        case COURSE_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case COURSE_DETAILS_RESET:
            return {
                ...state,
                course: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
export const chapterReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_CHAPTER_REQUEST:
        case UPDATE_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_CHAPTER_FAIL:
        case UPDATE_CHAPTER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_CHAPTER_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_CHAPTER_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}