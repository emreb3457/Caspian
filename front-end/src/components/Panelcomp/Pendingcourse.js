import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
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
                <h4><i className="fas fa-hourglass-half" />Payment Pending</h4>
            </div>
            <div className="dashboard-caption-wrap ">
                <ul className="list">
                    {coursies && coursies.map && coursies.map(crs =>
                        crs.registerusers && crs.registerusers.map && crs.registerusers.map(x => {
                            if (x.status == "not purchased") {
                                return (
                                    < li className="manage-list-row clearfix" >
                                        <div className="list-info">
                                            <div className="list-details" >
                                                <h3 className="job-name"><strong>{crs.name}</strong> <span className="text-danger"> - {crs.price}$</span></h3>
                                                <small className="job-company"><i className="fas fa-home"></i></small>
                                                <small className="job-company"><i className="fas fa-user"></i>{x.userId.name}</small>
                                                <small className="job-company"><i className="fas fa-clock"></i>Created At: <Moment format="DD/MM/YYYY">{x.createdAt}</Moment></small>
                                            </div>
                                            <div className="job-buttons">
                                                <div className="btn btn-success mr-2" onClick={() => onsubmit(crs._id, x.userId._id)}><i className="fas fa-check" /></div>
                                                <div className="btn btn-danger" onDoubleClick={() => onremoveSubmit(crs._id, x.userId._id)} title="Sil" ><i className="far fa-trash-alt" /></div>
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