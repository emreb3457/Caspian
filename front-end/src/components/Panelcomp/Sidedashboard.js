import React, { Component } from 'react'

const Sidedashboard = () => {
    return (
        <div className="side-dashboard">
            <div className="dashboard-image">
                <div id="image-dashboard">
                    <img  alt="imge"></img>
                </div>
                <div className="image-text">
                    <h4>Emre B.</h4>
                    <span>Admin</span>
                </div>
            </div>
            <div className="dashboard-menu">
                <div class="nav flex-column nav-pills" id="panel-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-alljob-tab" data-toggle="pill" href="#v-pills-alljob" role="tab" aria-controls="v-pills-alljob" aria-selected="true"><i class="fas fa-briefcase" />All Course</a>
                    <a class="nav-link" id="v-pills-pendingjob-tab" data-toggle="pill" href="#v-pills-pendingjob" role="tab" aria-controls="v-pills-payment" aria-selected="false"><i class="fas fa-hourglass-half" />Payment Pending</a>
                    <a class="nav-link" id="v-pills-users-tab" data-toggle="pill" href="#v-pills-users" role="tab" aria-controls="v-pills-users" aria-selected="false"><i class="fas fa-users" />All User</a>
                    <a class="nav-link" id="v-pills-auth-tab" data-toggle="pill" href="#v-pills-auth" role="tab" aria-controls="v-pills-auth" aria-selected="false"><i class="fas fa-shield-alt" />Authorize</a>
                    <a class="nav-link" href="#"><i class="fas fa-power-off" />Logout</a>
                </div>
            </div>
        </div>
    )

}
export default Sidedashboard
