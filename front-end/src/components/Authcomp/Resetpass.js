import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { loginSubmit } from "../actions/userAction";
import Validate from "../Homecomp/Validate"
import logo from "../../images/caspianLogo.png"
import lockicon from "../../images/icons/Lock.svg"
import { Link, Redirect } from "react-router-dom";
import { useAlert } from 'react-alert'
import { Form } from "react-bootstrap";
import { clearErrors, resetPassword } from "../../actions/userAction"


const Resetpass = ({ match, history }) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const [pass, setPass] = useState("")
    const [repass, setRepass] = useState("")
    const [validaterr, setError] = useState({})
    const { error, success } = useSelector(state => state.forgotpass)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Password updated successfully')
            history.push('/login')
        }

    }, [dispatch, alert, error, success, history])
    const onSubmit = () => {
        const errors = valid();
        setError(errors)
        if (Object.keys(validaterr).length === 0) {
            dispatch(resetPassword(match.params.token, pass, repass))
        }
    }
    const valid = () => {
        const errors = {};
        if (!pass) errors.email = "Password field is required.";
        if (!repass) errors.email = "Repassword field is required.";
        if (pass !== repass) errors.email = "Passwords do not match";
        return errors;
    }
    const errors = { ...validaterr };
    return (

        <div className="authPage" >
            
            <div className="loginLogo"><img alt="logo" src={logo} /></div>
            <div className="authBox">
                <div style={{ fontSize: "18px", fontWeight: "bold", color: "#000000", paddingTop: "42px" }}>Change Password</div>
                <hr style={{ backgroundColor: "#E7E5EA", marginBottom: "70px" }} />
                <div style={{ marginBottom: "30px" }}>
                    <span>Enter the new password</span>
                </div>
                <div className="inputs">
                    <Form>
                        <Form.Group className="mb-3 input-with-icon" controlId="formBasicEmail">
                            <img alt="icon" src={lockicon} />  <Form.Control className="textInput" type="password" placeholder="New password" onChange={(e) => setPass(e.target.value)} />
                            <Form.Text >
                                {errors.pass && <Validate message={errors.pass} />}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 input-with-icon" controlId="formBasicEmail">
                            <img alt="icon" src={lockicon} />  <Form.Control className="textInput" type="password" placeholder="Re password" onChange={(e) => setRepass(e.target.value)} />
                            <Form.Text >
                                {errors.repass && <Validate message={errors.repass} />}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <div><button style={{ marginTop: "20px", marginBottom: "50px" }} onClick={onSubmit} className="btn">Change Password</button></div>
                </div>
            </div>
        </div >

    )
}
export default Resetpass