import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import Loader from "../loader"
import Moment from "react-moment"
import { getAdminCourse, deleteCourse, clearErrors } from '../../actions/couseAction';
import { DELETE_COURSE_RESET, COURSE_DETAILS_RESET } from '../../constants/courseContants'

const Alljob = () => {
    const dispatch = useDispatch();
    const alert = useAlert()
    const history = useHistory()
    const { loading, error, coursies } = useSelector(state => state.coursies);
    const { error: deleteError, isDeleted } = useSelector(state => state.course)



    useEffect(() => {
        dispatch(getAdminCourse());
        dispatch({ type: COURSE_DETAILS_RESET });
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Course deleted successfully');
            history.push('/panel');
            dispatch({ type: DELETE_COURSE_RESET })
        }

    }, [dispatch, alert, deleteError, isDeleted, history])

    const deleteCourseHandler = (id) => {
        dispatch(deleteCourse(id))
    }
    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i className="fas fa-cogs" />All Course</h4>
                <Link to="/panel/course/new" className="btn btn-success ml-auto">Add Course</Link>
            </div>
            {loading && <Loader />}
            <ul className="list">
                {coursies && coursies.reverse().map(course =>
                    <li key={course._id} className="manage-list-row clearfix">
                        <div className="list-info" >
                            <div className="list-details">
                                <h3 className="job-name"><strong>{course.name}</strong> <span className="text-danger">{course.price}</span></h3>
                                <small className="job-company"><i className="fas fa-folder"></i>{course.category}</small>
                                <small className="job-company"><i className="fas fa-clock"></i>Created At <Moment format="DD/MM/YYYY">{course.createdAt}</Moment></small>
                            </div>
                        </div>
                        <div className="job-buttons">
                            <Link className="btn btn-info mr-2" title="Düzenle" to={{ pathname: "panel/course/new", state: { id: course._id } }}><i className="far fa-edit" /></Link>
                            <div className="btn btn-danger" title="Sil" onDoubleClick={() => deleteCourseHandler(course._id)} ><i className="far fa-trash-alt" /></div>
                        </div>

                    </li>
                )}


            </ul>
        </div >

    )

}
export default Alljob