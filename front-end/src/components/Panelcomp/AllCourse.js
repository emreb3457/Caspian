import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import Loader from "../loader"
import Moment from "react-moment"
import { Button, Modal } from "react-bootstrap"
import { getAdminCourse, deleteCourse, clearErrors } from '../../actions/couseAction';
import { DELETE_COURSE_RESET } from '../../constants/courseContants'

const Alljob = () => {
    const dispatch = useDispatch();
    const alert = useAlert()
    const history = useHistory()
    const { loading, error, coursies } = useSelector(state => state.coursies);
    const { error: deleteError, isDeleted } = useSelector(state => state.course)

    const [dialogShow, setDialogShow] = useState(false)
    const [dialogShows, setDialogShows] = useState(false)
    const [removetaskId, setRemovetaskId] = useState("")

    useEffect(() => {
        dispatch(getAdminCourse());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Product deleted successfully');
            history.push('/panel');
            dispatch({ type: DELETE_COURSE_RESET })
        }

    }, [dispatch, alert, deleteError, isDeleted, history])

    const deleteProductHandler = (id) => {
        dispatch(deleteCourse(id))
    }
    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i class="fas fa-cogs" />All Course</h4>
                <button className="btn btn-success ml-auto">Add Course</button>
            </div>
            {loading && <Loader />}
            <ul className="list">
                {console.log(coursies)}
                {coursies && coursies.map(course =>
                    <li class="manage-list-row clearfix">
                        <div class="list-info" >
                            <div class="list-details">
                                <h3 class="job-name"><strong>{course.name}</strong> <span className="text-danger">{course.price}</span></h3>
                                <small class="job-company"><i class="fas fa-folder"></i>{course.category}</small>
                                <small class="job-company"><i class="fas fa-clock"></i>Created At <Moment format="DD/MM/YYYY">{course.createdAt}</Moment></small>
                            </div>
                        </div>
                        <div class="job-buttons">
                            <Link className="btn btn-info mr-2" title="Düzenle" to="panel/course/new"><i class="far fa-edit" /></Link>
                            <div className="btn btn-danger" title="Sil" onDoubleClick={() => deleteProductHandler(course._id)} ><i class="far fa-trash-alt" /></div>
                        </div>

                    </li>
                )}


            </ul>
        </div >

    )

}
export default Alljob