import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { loginSubmit } from "../actions/userAction";
import Validate from "../Homecomp/Validate"
import logo from "../../images/caspianLogo.png"
import login from "../../images/icons/loginicon.svg"
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert'
import { Form } from "react-bootstrap";
import { forgotPassword, clearErrors } from "../../actions/userAction"
import Loader from "../loader"
const Forgotpass = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [validaterr, setError] = useState({})
    const { error, loading, message } = useSelector(state => state.forgotpass)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message)
        }

    }, [dispatch, alert, error, message])

    const onSubmit = () => {

        const errors = valid();
        setError(errors)
        if (Object.keys(validaterr).length === 0) {
            console.log("asd")
            dispatch(forgotPassword(email))
        }
    }
    const valid = () => {
        const errors = {};
        if (!email) errors.email = "E-Mail field is required.";
        return errors;
    }
    const errors = { ...validaterr };
    return (

        <div className="authPage" >
            <div className="back-arrow"><Link to="/login" /></div>
            <div className="loginLogo"><img alt="logo" src={logo} /></div>
            <div className="authBox">
                <div style={{ fontSize: "18px", fontWeight: "bold", color: "#000000", paddingTop: "42px" }}>Forgot password</div>
                <hr style={{ backgroundColor: "#E7E5EA", marginBottom: "70px" }} />
                <div style={{ marginBottom: "30px" }}>
                    <span>Enter the email you used during registration</span>
                </div>
                <div className="inputs">
                    {loading && <Loader />}
                    <Form>
                        <Form.Group className="mb-3 input-with-icon" controlId="formBasicEmail">
                            <img alt="icon" src={login} />  <Form.Control className="textInput" type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text >
                                {errors.email && <Validate message={errors.email} />}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <div><button style={{ marginTop: "20px", marginBottom: "50px" }} onClick={onSubmit} className="btn">Restore account</button></div>
                </div>
            </div>
        </div >

    )
}
export default Forgotpass