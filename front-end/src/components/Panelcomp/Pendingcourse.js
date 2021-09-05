import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import Loader from "../loader"
import Moment from "react-moment"
import { getAdminCourse, setOpen, courseunRegister, clearErrors } from "../../actions/couseAction"
const Pendingjob = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const history = useHistory();

    const { loading, error, coursies } = useSelector(state => state.coursies)
    const { error: errorUpdate, isUpdated } = useSelector(state => state.course)
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if (errorUpdate) {
            alert.error(errorUpdate);
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success("Success")
            dispatch(getAdminCourse())
            dispatch({ type: "UPDATE_COURSE_RESET" })
        }
    }, [error, errorUpdate, isUpdated])

    const onsubmit = (courseId, usrId) => {
        dispatch(setOpen(courseId, usrId))
    }
    const onremoveSubmit = (courseId, usrId) => {
        dispatch(courseunRegister(courseId, usrId))
    }
    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i class="fas fa-hourglass-half" />Payment Pending</h4>
            </div>
            <div className="dashboard-caption-wrap ">
                <ul className="list">
                    {coursies && coursies.map && coursies.map(crs =>
                        crs.registerusers && crs.registerusers.map && crs.registerusers.map(x => {
                            if (x.status == "not purchased") {
                                return (
                                    < li class="manage-list-row clearfix" >
                                        <div class="list-info">
                                            <div class="list-details" >
                                                <h3 class="job-name"><strong>{crs.name}</strong> <span className="text-danger"> - {crs.price}$</span></h3>
                                                <small class="job-company"><i class="fas fa-home"></i></small>
                                                <small class="job-company"><i class="fas fa-user"></i>{x.userId.name}</small>
                                                <small class="job-company"><i class="fas fa-clock"></i>Created At: <Moment format="DD/MM/YYYY">{x.createdAt}</Moment></small>
                                            </div>
                                            <div class="job-buttons">
                                                <div className="btn btn-success mr-2" onClick={() => onsubmit(crs._id, x.userId._id)}><i class="fas fa-check" /></div>
                                                <div className="btn btn-danger" onClick={() => onremoveSubmit(crs._id, x.userId._id)} title="Sil" ><i class="far fa-trash-alt" /></div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        })
                    )}
                </ul>
            </div>


        </div >
    )

}
export default Pendingjob