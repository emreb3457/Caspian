import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Validate from "../Homecomp/Validate"
import login from "../../images/icons/loginicon.svg"
import lock from "../../images/icons/Lock.svg"
import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import Loader from "../loader"
import { Row, Col, Form } from "react-bootstrap";
import { loginac, clearErrors } from '../../actions/userAction'
import { GoogleLogin } from "react-google-login"
import { API_BASE, GOOGLE_CLIENT_ID } from '../../config/env';
import axioss from 'axios'
const axios = axioss.create({
    withCredentials: true,
    baseURL: API_BASE
})
const Signin = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [rm, setRm] = useState(false)
    const [error, setError] = useState({})

    const { isAuthenticated, err, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/")
        }

        if (err) {
            alert.error(err);
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, err])
    const onSubmit = () => {
        const errors = valid()
        setError(errors);
        console.log("asd")
        if (Object.keys(errors).length === 0) {

            dispatch(loginac(email, pass, rm));
        }
    }
    const valid = () => {
        const errors = {};
        if (!email) errors.email = "E-Mail field is required.";
        if (!pass) errors.pass = "Password field is required.";
        return errors;
    }
    const errors = { ...error };
    const handleLogin = async googleData => {
        try {
            dispatch({ type: "LOGIN_REQUEST" })

            const { data } = await axios.post(`${API_BASE}/api/v1/login/google`, { token: googleData.tokenId }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: data.user
            })
        } catch (error) {
            dispatch({
                type: "LOGIN_FAIL",
                payload: error.response.data.message
            })
        }

    }
    return (
        <div className="authpages">
            <div className="topContent">
                <h3>Let’s Sign You In</h3>
                <span>Welcome back, you’ve been missed!</span>
            </div>
            <div className="inputs">
                {loading && <Loader />}
                <Form>
                    <Form.Group className="mb-3 input-with-icon" >
                        <img alt="icon" src={login} />  <Form.Control className="textInput" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text >
                            {errors.email && <Validate message={errors.email} />}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 input-with-icon" >
                        <img alt="icon" src={lock} /><Form.Control className="textInput" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                        <Form.Text >
                            {errors.pass && <Validate message={errors.pass} />}
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <Col lg="6" md="6" xs="6">
                            <Form.Group className="mb-3" >
                                <Form.Check className="checkBox" type="checkbox" label="Remember Me" defaultChecked={rm} onChange={() => setRm(!rm)} />
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="6" xs="6">
                            <div className="forgetPass"><Link to="/password/forgot">Forgot Password?</Link></div>
                        </Col>
                    </Row>
                </Form>
                <div><button className="btn" onClick={() => onSubmit()}>Sign In</button></div>
            </div>
            <div className="bottomContent">
                <div><Link to="#">Or continue with</Link></div>
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Continue with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    )
}
export default Signin