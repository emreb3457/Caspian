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
                    <a class="nav-link active" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"><i class="fas fa-tachometer-alt" />Gösterge Paneli</a>
                    <a class="nav-link" id="v-pills-alljob-tab" data-toggle="pill" href="#v-pills-alljob" role="tab" aria-controls="v-pills-alljob" aria-selected="false"><i class="fas fa-briefcase" />Tüm Görevler</a>
                    <a class="nav-link" id="v-pills-pendingjob-tab" data-toggle="pill" href="#v-pills-pendingjob" role="tab" aria-controls="v-pills-alljob" aria-selected="false"><i class="fas fa-hourglass-half" />Bekleyen Görevler</a>
                    <a class="nav-link" id="v-pills-users-tab" data-toggle="pill" href="#v-pills-users" role="tab" aria-controls="v-pills-users" aria-selected="false"><i class="fas fa-users" />Kullanıcılar</a>
                    <a class="nav-link" id="v-pills-message-tab" data-toggle="pill" href="#v-pills-message" role="tab" aria-controls="v-pills-message" aria-selected="false"><i class="fas fa-inbox" />Mesajlar</a>
                    <a class="nav-link" id="v-pills-auth-tab" data-toggle="pill" href="#v-pills-auth" role="tab" aria-controls="v-pills-auth" aria-selected="false"><i class="fas fa-shield-alt" />Yetkilendir</a>
                    <a class="nav-link" id="v-pills-logs-tab" data-toggle="pill" href="#v-pills-logs" role="tab" aria-controls="v-pills-logs" aria-selected="false"><i class="far fa-file-code" />Sistem Logları</a>
                    <a class="nav-link" href="#"><i class="fas fa-power-off" />Çıkış Yap</a>
                </div>
            </div>
        </div>
    )

}
export default Sidedashboard
