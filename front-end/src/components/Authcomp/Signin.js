import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Validate from "../Homecomp/Validate"
import login from "../../images/icons/loginicon.svg"
import lock from "../../images/icons/Lock.svg"
import { Link,  useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'

import { Row, Col, Form } from "react-bootstrap";
import { loginac, clearErrors } from '../../actions/userAction'


const Signin = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [validaterr, setError] = useState({})

    const { isAuthenticated, err, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            history.goBack()
        }

        if (err) {
            alert.error(err);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, err])
    const onSubmit = () => {
        const errors = valid()
        setError(errors);
        if (Object.keys(validaterr).length === 0) {
            dispatch(loginac(email, pass));
        }
    }
    const valid = () => {
        const errors = {};
        if (!email) errors.email = "E-Mail field is required.";
        if (!pass) errors.pass = "Password field is required.";
        return errors;
    }
    const errors = { ...validaterr };

    return (
        <div>
            <div className="topContent">
                <h3>Let’s Sign You In</h3>
                <span>Welcome back, you’ve been missed!</span>
            </div>
            <div className="inputs">
                <Form>
                    <Form.Group className="mb-3 input-with-icon" controlId="formBasicEmail">
                        <img alt="icon" src={login} />  <Form.Control className="textInput" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text >
                            {errors.email && <Validate message={errors.email} />}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 input-with-icon" controlId="formBasicPassword">
                        <img alt="icon" src={lock} /><Form.Control className="textInput" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                        <Form.Text >
                            {errors.pass && <Validate message={errors.pass} />}
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <Col lg="6" md="6" xs="6">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="checkBox" type="checkbox" label="Remember Me" />
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="6" xs="6">
                            <div className="forgetPass"><Link to="/password/forgot">Forgot Password?</Link></div>
                        </Col>
                    </Row>
                </Form>
                <div><button className="btn" onClick={onSubmit}>Sign In</button></div>
            </div>
            <div className="bottomContent">
                <div><Link to="#">Or continue with</Link></div>
                <div>Google </div>
            </div>
        </div>
    )
}
export default Signin