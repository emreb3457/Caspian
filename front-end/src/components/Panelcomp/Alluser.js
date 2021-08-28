import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'

import Loader from "../loader"

import Moment from "react-moment"

import { Button, Modal } from "react-bootstrap"

const Alluser = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const alert = useAlert()

    const [dialogShow, setDialogShow] = useState(false)
    const [dialogShows, setDialogShows] = useState(false)
    const [removetaskId, setRemovetaskId] = useState("")



    useEffect(() => {


    }, [])





    // const removeTaskFunc = (taskId) => {
    //     dispatch(adminremoveTask(session.token, taskId))
    //     dispatch(admintaskGet(session.token, currentPage, keyword, category))
    // }
    const handleClose = () => { return setDialogShows(false), setDialogShow(false) }
    const handleShow = (taskid) => { return setDialogShows(true), setDialogShow(true), setRemovetaskId() }

    // const dialogshow = (body, event) => {
    //     return (
    //         < Modal className="dialogModal" show={dialogShows} onHide={handleClose} >

    //             <Modal.Body>{body}</Modal.Body>
    //             <Modal.Footer>
    //                 <Button variant="secondary" onClick={handleClose}>
    //                     Hayır
    //                 </Button>
    //                 {event === "removeTask" && <Button variant="primary" onClick={() => { removeTaskFunc(); handleClose() }}>Evet</Button>}
    //             </Modal.Footer>
    //         </Modal >
    //     )
    // }

    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i class="fas fa-cogs" />All User</h4>
            </div>
            <ul className="list">

                <li class="manage-list-row clearfix">
                    <div class="list-info" >
                        <div class="list-details">
                            <h3 class="job-name"><strong>das</strong> <span className="text-danger">12</span></h3>
                            <small class="job-company"><i class="fas fa-home"></i>asd</small>
                            <small class="job-company"><i class="fas fa-user"></i>ds</small>
                            <small class="job-company"><i class="fas fa-clock"></i>Başlangıç Tarihi: <Moment format="DD/MM/YYYY"></Moment></small>
                            <small class="job-company"><i class="fas fa-clock"></i>Bitiş Tarihi: <Moment format="DD/MM/YYYY"></Moment></small>
                        </div>
                    </div>
                    <div class="job-buttons">
                        <Link className="btn btn-info mr-2" title="Düzenle" to="#"><i class="far fa-edit" /></Link>
                        <div className="btn btn-danger" title="Sil" onClick={() => handleShow()}><i class="far fa-trash-alt" /></div>
                    </div>

                </li>

            </ul>
      

           
            {/* { dialogShow === true && dialogshow("Silmek İstiyor musunuz?", "removeTask") } */}
        </div >

    )

}
export default Alluser