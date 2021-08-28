import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { loginSubmit } from "../actions/userAction";
import Validate from "../components/Homecomp/Validate"
import Signin from "../components/Authcomp/Signin"
import { Link, Redirect } from "react-router-dom";
import { useAlert } from 'react-alert'
import { Tab, Tabs, Row, Col, Container } from "react-bootstrap"
import logo from "../images/caspianLogo.png"
import Signup from '../components/Authcomp/Signup';

export const Login = () => {

    return (
        <div  className="authPage" >
             <div className="back-arrow"><Link to="/"/></div>
            <div className="loginLogo"><img alt="logo" src={logo} /></div>
            <div className="authBox">
               
                <Tabs
                    defaultActiveKey="signin"
                    id="auth-tab-example"
                    className="mb-3">
                    <Tab eventKey="signin" title="Sign In">
                        <Signin />
                    </Tab>
                    <Tab eventKey="signup" title="Sign Up">
                    <Signup />
                    </Tab>
                </Tabs>

            </div>
        </div >
    )


}

export default Login