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
                <h4><i class="fas fa-cogs" />All User</h4>
            </div>
            <ul className="list">
                {users && users.map(usr =>
                    <li key={usr._id} class="manage-list-row clearfix">
                        <div class="list-info" >
                            <div class="list-details">
                                <h3 class="job-name"><strong>{usr.name} - {usr.email}</strong></h3>
                                <small class="job-company"><i class="fas fa-user"></i>{usr.role}</small>
                                <small class="job-company"><i class="fas fa-clock"></i>Created At <Moment format="DD/MM/YYYY">{usr.createdAt}</Moment></small>
                                
                            </div>
                        </div>
                        <div class="job-buttons">
                            <div className="btn btn-danger" title="Sil" onDoubleClick={() => deleteUserHandler(usr._id)}><i class="far fa-trash-alt" /></div>
                        </div>
                    </li>
                )}
            </ul>
        </div >

    )

}
export default Alluser