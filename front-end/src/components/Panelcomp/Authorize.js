import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import Moment from "react-moment"
import { updateUserRole, clearErrors, allUsers } from "../../actions/userAction"

const Authorize = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const [email, setEmail] = useState("")

    const { loading, users } = useSelector(state => state.allusers);
    const { error, isUpdated } = useSelector(state => state.user)
    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            dispatch(allUsers());
            dispatch({ type: "UPDATE_PROFILE_RESET" })
        }

    }, [error, isUpdated])
    const changeRoleadmin = () => {
        if (!email) {
            alert.error("Email cannot be blank")
        }
        else {
            dispatch(updateUserRole("admin", email))
        }
    }
    const changeRoleuser = (usermail) => {

        dispatch(updateUserRole("user", usermail))
    }
    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i className="fas fa-shield-alt" />Yetkilendir</h4>
            </div>
            <div className="dashboard-caption-wrap">
                <div className="form-row search-bar">
                    <div className="col-sm-12 col-lg-4 mb-3 ">
                        <div className="input-group md-form form-sm form-1 pl-0 ">
                            <input className="form-control my-0 py-1" type="search" placeholder="E-mail adress" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 mb-3 ">
                        <div className="job-buttons">
                            <div onClick={() => changeRoleadmin()} className="btn btn-success mr-2"><i className="fas fa-plus" /></div>
                        </div>
                    </div>
                </div>
                <ul className="list">
                    {users && users.map && users.map(usr => {
                        if (usr.role == "admin") {
                            return (
                                <li key={usr._id} className="manage-list-row clearfix">
                                    <div className="list-info">
                                        <div className="list-details">
                                            <h3 className="job-name"><strong>{usr.name}</strong><span className="text-danger"> - {usr.email}</span></h3>
                                            <small className="job-company"><i className="fas fa-user"></i>{usr.role}</small>
                                            <small className="job-company"><i className="fas fa-clock"></i>Created At <Moment format="DD/MM/YYYY">{usr.createdAt}</Moment></small>
                                        </div>
                                    </div>
                                    <div className="job-buttons">
                                        <div onDoubleClick={() => changeRoleuser(usr.email)} className="btn btn-danger "><i className="far fa-trash-alt" /></div>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )

}
export default Authorize