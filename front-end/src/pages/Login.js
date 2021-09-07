import React from 'react'


import Signin from "../components/Authcomp/Signin"
import { Link } from "react-router-dom";

import { Tab, Tabs } from "react-bootstrap"
import logo from "../images/caspianLogo.png"
import Signup from '../components/Authcomp/Signup';
import MetaData from '../components/layout/MetaData';

export const Login = () => {

    return (
        <div className="authPage" >
             <MetaData title="Login Page"/>
            <div className="back-arrow"><Link to="/" /></div>
            <div className="loginLogo"><img alt="logo" src={logo} /></div>
            <div className="authBox">

                <Tabs transition={true}
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