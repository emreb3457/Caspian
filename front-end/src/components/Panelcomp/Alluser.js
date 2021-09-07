import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import Loader from "../loader"
import Moment from "react-moment"
import { deleteUser, clearErrors, allUsers } from "../../actions/userAction"
import { DELETE_USER_RESET } from "../../constants/userContants"



const Alluser = (props) => {

    const dispatch = useDispatch();
    const alert = useAlert()
    const history = useHistory()
    const { loading, error, users } = useSelector(state => state.allusers);
    const { error: deleteError, isDeleted } = useSelector(state => state.user)


    useEffect(() => {
        dispatch(allUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('User deleted successfully');

            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, isDeleted, history])





    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i className="fas fa-cogs" />All User</h4>
            </div>
            <ul className="list">
                {users && users.map(usr =>
                    <li key={usr._id} className="manage-list-row clearfix">
                        <div className="list-info" >
                            <div className="list-details">
                            <h3 className="job-name"><strong>{usr.name}</strong><span className="text-danger"> - {usr.email}</span></h3>
                                <small className="job-company"><i className="fas fa-user"></i>{usr.role}</small>
                                <small className="job-company"><i className="fas fa-clock"></i>Created At <Moment format="DD/MM/YYYY">{usr.createdAt}</Moment></small>
                                
                            </div>
                        </div>
                        <div className="job-buttons">
                            <div className="btn btn-danger" title="Sil" onDoubleClick={() => deleteUserHandler(usr._id)}><i className="far fa-trash-alt" /></div>
                        </div>
                    </li>
                )}
            </ul>
        </div >

    )

}
export default Alluser