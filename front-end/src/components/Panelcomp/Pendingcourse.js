import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import Loader from "../loader"
import Moment from "react-moment"
import { Button, Modal } from "react-bootstrap"
const Pendingjob = () => {
    // const dispatch = useDispatch();
    // const alert = useAlert();
    // const history = useHistory();
    

    useEffect(() => {

    }, [])

    // const removeTaskFunc = (taskId) => {
    //     dispatch(adminremoveTask(session.token, taskId))
    //     dispatch(adminpendingtasks(session.token, currentPage))
    // }
    // const setPendingFunc = (taskId) => {
    //     dispatch(adminsetpendingTask(session.token, taskId))
    //     dispatch(adminpendingtasks(session.token, currentPage))
    //     dispatch(admintaskGet(session.token))
    // }
 

    // const dialogshow = (body, event) => {
    //     return (
    //         < Modal className="dialogModal" show={dialogShows} onHide={handleClose} >

    //             <Modal.Body>{body}</Modal.Body>
    //             <Modal.Footer>
    //                 <Button variant="secondary" onClick={handleClose}>
    //                     Hayır
    //                 </Button>
    //                 {event === "removeTask" && <Button variant="primary" onClick={() => { removeTaskFunc(removetaskId); handleClose() }}>Evet</Button>}
    //                 {event === "setTask" && <Button variant="primary" onClick={() => { setPendingFunc(pendingsettaskId); handleClose() }}>Evet</Button>}
    //             </Modal.Footer>
    //         </Modal >
    //     )
    // }
    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i class="fas fa-hourglass-half" />Bekleyen Görevler</h4>
            </div>
            <div className="dashboard-caption-wrap ">
                <ul className="list">

                    <li class="manage-list-row clearfix" >
                        <div class="list-info">
                            <div class="list-details" >
                                <h3 class="job-name"><strong>{}</strong> <span className="text-danger"></span></h3>
                                <small class="job-company"><i class="fas fa-home"></i></small>
                                <small class="job-company"><i class="fas fa-user"></i></small>
                                <small class="job-company"><i class="fas fa-clock"></i>Başlangıç Tarihi: <Moment format="DD/MM/YYYY"></Moment></small>
                                <small class="job-company"><i class="fas fa-clock"></i>Bitiş Tarihi: <Moment format="DD/MM/YYYY"></Moment></small>
                            </div>
                            <div class="job-buttons">
                                <div className="btn btn-success mr-2"><i class="fas fa-check" /></div>
                                <div className="btn btn-danger" title="Sil" ><i class="far fa-trash-alt" /></div>
                            </div>
                        </div>

                    </li>

                </ul>
            </div>
           
           
        </div>
    )

}
export default Pendingjob