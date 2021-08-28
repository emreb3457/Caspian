import React, { Component } from 'react'

const Authorize = () => {

    return (
        <div className="dashboard-caption">
            <div className="dashboard-caption-header">
                <h4><i class="fas fa-shield-alt" />Yetkilendir</h4>
            </div>
            <div className="dashboard-caption-wrap">
                <div className="form-row search-bar">
                    <div className="col-sm-12 col-lg-4 mb-3 ">
                        <div className="input-group md-form form-sm form-1 pl-0 ">
                            <input className="form-control my-0 py-1" type="search" placeholder="Kullanıcı ID" aria-label="Search" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 mb-3 ">
                        <select id="inputState" className="form-control">
                            <option defaultValue>Rolü</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-lg-4 mb-3 ">
                        <div class="job-buttons">
                            <div className="btn btn-success mr-2"><i class="fas fa-plus" /></div>
                            <div className="btn btn-danger "><i class="far fa-trash-alt" /></div>
                        </div>
                    </div>
                </div>
                <ul className="list">
                    <li class="manage-list-row clearfix">
                        <div class="list-info">
                            <div class="user-img">
                                <img src="" class="attachment-thumbnail" alt="image" />
                            </div>
                            <div class="list-details">
                                <h3 class="job-name"><strong>Emre Başkaya</strong><span className="text-danger">#01</span></h3>
                                <small class="job-company"><i class="fas fa-home"></i>Yazılımcı</small>
                                <small class="job-company"><i class="fas fa-map-marker-alt"></i>İstanbul</small>
                                <small class="job-company"><i class="fas fa-clock"></i>Kayıt Tarihi: 14/06/19</small>
                            </div>
                        </div>
                        <div class="job-buttons">
                            <div className="btn btn-info mr-2"><i class="far fa-envelope" /></div>
                            <div className="btn btn-danger "><i class="far fa-trash-alt" /></div>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    )

}
export default Authorize