import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { loginSubmit } from "../actions/userAction";
import Validate from "../Homecomp/Validate"
import login from "../../images/icons/loginicon.svg"
import lock from "../../images/icons/Lock.svg"
import profile from "../../images/icons/Profile.svg"

import { Form } from "react-bootstrap";
import { register } from '../../actions/userAction'

const Signup = () => {
   
    const dispatch = useDispatch();
   
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const [validaterr, setError] = useState("")

    const onSubmit = () => {
        const errors = valid()
        setError(errors);
        if (Object.keys(validaterr).length === 0) {
            dispatch(register(name, email, pass));
        }
    }
    const valid = () => {
        const errors = {};
        if (!email) errors.email = "E-Mail field is required.";
        if (!pass) errors.pass = "Password field is required.";
        if (!name) errors.name = "Name field is required.";
        return errors;
    }
    const errors = { ...validaterr };
    return (
        <div>
            <div className="topContent">

            </div>
            <div className="inputs">
                <Form>
                    <Form.Group className="mb-3 input-with-icon" controlId="formBasicEmail">
                        <img alt="icon" src={login} />  <Form.Control className="textInput" type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text >
                            {errors.email && <Validate message={errors.email} />}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 input-with-icon" controlId="formBasicName">
                        <img alt="icon" src={profile} />  <Form.Control className="textInput" type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
                        <Form.Text >
                            {errors.name && <Validate message={errors.name} />}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 input-with-icon" controlId="formBasicPassword">
                        <img alt="icon" src={lock} /><Form.Control className="textInput" type="password" placeholder="Your password" onChange={(e) => setPass(e.target.value)} />
                        <Form.Text >
                            {errors.pass && <Validate message={errors.pass} />}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ marginTop: "30px" }} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="checkBox" type="checkbox" label="I agree to the terms of service" />
                    </Form.Group>
                </Form>
                <div><button className="btn" onClick={onSubmit}>Create Account</button></div>
            </div>
            <hr style={{ backgroundColor: "#E7E5EA" }} />
            <div className="bottomContent">

                <div>Google </div>
            </div>
        </div>
    )
}
export default Signup