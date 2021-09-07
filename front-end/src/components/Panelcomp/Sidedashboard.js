import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_BASE } from '../../config/env'
import { useHistory } from 'react-router';
import { logout, clearErrors } from "../../actions/userAction"
const Sidedashboard = () => {
    const dispatch = useDispatch("")
    const history = useHistory()
    const { user, error } = useSelector(state => state.auth)
    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert])

    const logoutt = () => {
        dispatch(logout())
        history.push("/login")
    }
    return (
        <div className="side-dashboard">
            <div className="dashboard-image">
                <div id="image-dashboard">
                    <img alt="imge" src={`${API_BASE}/${user.avatar.url}`}></img>
                </div>
                <div className="image-text">
                    <h4>Emre B.</h4>
                    <span>Admin</span>
                </div>
            </div>
            <div className="dashboard-menu">
                <div className="nav flex-column nav-pills" id="panel-pills-tab" role="tablist" aria-orientation="vertical">
                    <a href="/" className="nav-link "><i className="fas fa-home" />Go home</a>
                    <a className="nav-link active" id="v-pills-alljob-tab" data-toggle="pill" href="#v-pills-alljob" role="tab" aria-controls="v-pills-alljob" aria-selected="true"><i className="fas fa-briefcase" />All Course</a>
                    <a className="nav-link" id="v-pills-pendingjob-tab" data-toggle="pill" href="#v-pills-pendingjob" role="tab" aria-controls="v-pills-payment" aria-selected="false"><i className="fas fa-hourglass-half" />Payment Pending</a>
                    <a className="nav-link" id="v-pills-users-tab" data-toggle="pill" href="#v-pills-users" role="tab" aria-controls="v-pills-users" aria-selected="false"><i className="fas fa-users" />All User</a>
                    <a className="nav-link" id="v-pills-auth-tab" data-toggle="pill" href="#v-pills-auth" role="tab" aria-controls="v-pills-auth" aria-selected="false"><i className="fas fa-shield-alt" />Authorize</a>
                    <a className="nav-link" onClick={logoutt} href="#"><i className="fas fa-power-off" />Logout</a>
                </div>
            </div>
        </div>
    )

}
export default Sidedashboard
