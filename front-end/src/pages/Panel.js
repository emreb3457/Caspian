import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'
import Pendingcourse from "../components/Panelcomp/Pendingcourse"
import AllCourse from "../components/Panelcomp/AllCourse"
import Authorize from "../components/Panelcomp/Authorize"
import Sidedashboard from "../components/Panelcomp/Sidedashboard"
import Alluser from '../components/Panelcomp/Alluser';


const Panel = () => {
    const alert = useAlert()

    return (
        <div id="adminpanel" className="page-bg-color">
            <section className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            <Sidedashboard />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="dashboard-body">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-alljob" role="tabpanel" ><AllCourse /></div>
                                    <div className="tab-pane fade" id="v-pills-pendingjob" role="tabpanel" ><Pendingcourse /></div>
                                    <div className="tab-pane fade" id="v-pills-users" role="tabpanel" ><Alluser /></div>
                                    <div className="tab-pane fade" id="v-pills-auth" role="tabpanel" ><Authorize /></div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                </div>
            </section>
        </div>
    )
}
export default Panel