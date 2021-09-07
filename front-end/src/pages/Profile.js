import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert'
import { API_BASE } from "../config/env"
import { clearErrors, logout, updatePassword, updateProfile, uploadAvatar } from "../actions/userAction"
import { getUserCourse } from "../actions/couseAction"
import Loader from "../components/loader"
import MetaData from '../components/layout/MetaData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Validate from "../components/Homecomp/Validate"

const Home = () => {
    const dispatch = useDispatch();
    const alert = useAlert()
    const [validaterr, setError] = useState({})
    const [newemail, setNewemail] = useState("")
    const [confirmEmailpass, setconfirmEmailpass] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirm] = useState("")
    const [currentPass, setcurrentPass] = useState("")
    const [regexpPass, setRegexp] = useState("")
    const [loop, setLoop] = useState(true)

    const { loading, user, isAuthenticated, error } = useSelector(state => state.auth)
    const { loading: courseLoading, error: courseError, courses } = useSelector(state => state.coursies)
    const { error: updateError, isUpdated } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUserCourse())

        if (error) {
            alert.error(error)
        }

    }, [dispatch, error])
    useEffect(() => {
        if (isUpdated) {
            alert.success("Profile updated")
            dispatch({ type: "UPDATE_PASSWORD_RESET" })
            dispatch({ type: "UPDATE_PROFILE_RESET" })
            setTimeout(() => {
                window.location.reload();
            }, 1000);

        }
        if (updateError) {
            alert.error(updateError)
            dispatch(clearErrors())
        }
        if (courseError) {
            alert.error(courseError)
            dispatch(clearErrors())
        }

    }, [dispatch, courseError, updateError, isUpdated])

    const passwordRegexp = (pass) => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        if (strongRegex.test(pass)) {
            setRegexp(password)
        }
    }
    const onSubmitEmail = () => {
        const errors = validate();
        console.log(newemail, confirmEmailpass)
        setError(errors);
        if (Object.keys(errors).length === 0) {
            dispatch(updateProfile(newemail, confirmEmailpass))
            setNewemail("")
            setconfirmEmailpass("")
        }
    }
    const onSubmitPassword = () => {
        const errors = validate2();
        setError(errors);
        if (Object.keys(errors).length === 0) {
            dispatch(updatePassword(currentPass, password))
            setPassword("")
            setConfirm("")
            setcurrentPass("")
        }
    }
    const validate = () => {
        let errors = {}
        if (!newemail) errors.newemail = "New mail field is required.";
        if (!confirmEmailpass) errors.confirmEmailpass = "Password field is required.";
        return errors;
    }
    const validate2 = () => {
        let errors = {}
        if (!password) errors.password = "Password field is required.";
        if (!confirmPassword) errors.confirmPassword = "Confirm password field is required.";
        if (confirmPassword !== password) { errors.confirmPassword = "Passwords do not match."; errors.password = "Passwords do not match."; }
        if (!currentPass) errors.currentPass = "Current password field is required.";
        if (!regexpPass) errors.password = "Please enter another password";
        return errors;
    }
    const emailToggle = (x) => {

        if (x.classList[0] == "toggle") {

            document.getElementsByClassName("emailToggle")[0].style.display = "none"
            document.getElementsByClassName("settingsemail")[0].style.display = "block"
        }
        else {
            document.getElementsByClassName("settingsemail")[0].style.display = "none"
            document.getElementsByClassName("emailToggle")[0].style.display = "block"
        }
    }
    const passwordToggle = (x) => {
        if (x.classList[0] == "toggle") {

            document.getElementsByClassName("passwordToggle")[0].style.display = "none"
            document.getElementsByClassName("settingspass")[0].style.display = "block"
        }
        else {
            document.getElementsByClassName("settingspass")[0].style.display = "none"
            document.getElementsByClassName("passwordToggle")[0].style.display = "block"
        }
    }
    const setAvatar = (elem) => {
        console.log(elem.target.files)
        if (elem.target.files.length === 1) {
            if (elem.target.files[0].type === "image/jpeg" || elem.target.files[0].type === 'image/png') {
                const formData = new FormData();
                formData.set('avatar', elem.target.files[0]);
                alert.info("You will be notified when uploaded")
                setTimeout(() => {
                    dispatch(uploadAvatar(formData))
                }, 1000);
            }
            else {
                elem.target.value = "";
                alert.error("Invalid File Format..")
            }
        }
    }
    const openFileupload = () => {
        document.getElementById("imageUpload").click()
    }
    return (
        <Fragment>
            <Header />
            <div id="profile">
                <MetaData title="Profile" />
                <input style={{ display: "none" }} onChange={(e) => setAvatar(e)} id="imageUpload" type="file" />
                <Container>
                    {loading || courseLoading && <Loader />}
                    {isAuthenticated && user && courses &&
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col lg="4">
                                    <Nav variant="pills" className="flex-column left-column">
                                        <div className="profile-main">
                                            <div className="content_img">
                                                <img onClick={() => openFileupload()} alt="pp" src={`${API_BASE}/${user.avatar.url}`} />
                                                <div onClick={() => openFileupload()}>Click to change your profile picture</div>
                                            </div>

                                        </div>
                                        <span className="d-block text-capitalize">{user.name}</span>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><i className="far fa-file-alt"></i>My courses</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><i className="fas fa-cog"></i>Settings</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link onClick={() => dispatch(logout())} eventKey="logut"><i className="fas fa-sign-out-alt"></i>Exit</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="my-course">
                                                <div><span className="text-muted">Total: {courses.length} Courses</span></div>
                                                <Row>
                                                    {courses && courses.map && courses.map(x => {
                                                        if (x.registerusers && user) {
                                                            return (
                                                                x.registerusers.map(y => {
                                                                    if (y.userId == user._id) {
                                                                        return (
                                                                            <Col key={x._id} xs="12" lg="6">
                                                                                <Link key={y._id} to={`/course/${x._id}`} className="text-decoration-none">
                                                                                    <div className="card">
                                                                                        <div className="profilbtn btn">{x.category}</div>
                                                                                        <h5>{x.name}</h5>
                                                                                        {y.status == "continuing" && <span className="text-capitalize">Status:<span style={{ color: "#FF6E30" }}> {y.status}</span></span>}
                                                                                        {y.status == "finished" && <span className="text-capitalize">Status:<span style={{ color: "#3EC43E" }}> {y.status}</span></span>}
                                                                                        {y.status == "not purchased" && <span className="text-capitalize">Status:<span style={{ color: "#E4B12C" }}> {y.status}</span></span>}
                                                                                    </div>
                                                                                </Link>
                                                                            </Col>
                                                                        )
                                                                    }
                                                                })
                                                            )
                                                        }
                                                    })}
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="profil-settings">
                                                <div className="settingsemail">
                                                    <h5 className="mb-4">Settings</h5>
                                                    <div className="mb-4">
                                                        <h5>Email<span onClick={(e) => emailToggle(e.currentTarget)}>Chance</span></h5>
                                                        <span>{user.email}</span>
                                                    </div>
                                                </div>

                                                <div className="mb-4 emailToggle">
                                                    <h5 className="mb-4">Change email</h5>
                                                    <span>New Email*</span>
                                                    <Form.Group className="mb-3" >
                                                        <Form.Control type="email" value={newemail} onChange={(e) => setNewemail(e.target.value)} />
                                                        {validaterr.newemail && <Validate message={validaterr.newemail} />}
                                                    </Form.Group>
                                                    <span>Confirm your Password*</span>
                                                    <Form.Group className="mb-3" >
                                                        <Form.Control type="password" value={confirmEmailpass} onChange={(e) => setconfirmEmailpass(e.target.value)} />
                                                        {validaterr.confirmEmailpass && <Validate message={validaterr.confirmEmailpass} />}
                                                    </Form.Group>
                                                    <div className="toggleButton d-block">
                                                        <div onClick={() => onSubmitEmail()} className="toggle btn">Save</div>
                                                        <div onClick={(e) => emailToggle(e.currentTarget)} style={{ color: "#3EC43E" }} className="toggle btn bg-white">Cancel</div>
                                                    </div>
                                                </div>

                                                <div className="settingspass">
                                                    <h5>Password<span onClick={(e) => passwordToggle(e.currentTarget)}>Chance</span></h5>
                                                    <span style={{ fontSize: "30px" }}>******</span>
                                                </div>

                                                <div className="mb-4 passwordToggle">
                                                    <h5 className="mb-4">Change Password</h5>
                                                    <p>Make sure it’s at least 8 characters, uses a mix of upper and lower case characters, includes at least 1 number, 1 special character, and does not use common words like “password”, “123456” or “qwerty”.</p>

                                                    <span>New Password*</span>
                                                    <Form.Group className="mb-1" >
                                                        <Form.Control type="password" value={password} onChange={(e) => { setPassword(e.target.value); passwordRegexp(e.target.value) }} />
                                                        {validaterr.password && <Validate message={validaterr.password} />}
                                                    </Form.Group>

                                                    <span>Confirm new Password*</span>
                                                    <Form.Group className="mb-1" >
                                                        <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirm(e.target.value)} />
                                                        {validaterr.confirmPassword && <Validate message={validaterr.confirmPassword} />}
                                                    </Form.Group>

                                                    <span>Current Password*</span>
                                                    <Form.Group className="mb-1" >
                                                        <Form.Control type="password" value={currentPass} onChange={(e) => setcurrentPass(e.target.value)} />
                                                        {validaterr.currentPass && <Validate message={validaterr.currentPass} />}
                                                    </Form.Group>
                                                    <div className="toggleButton d-block">
                                                        <div onClick={() => onSubmitPassword()} className="btn">Save</div>
                                                        <div onClick={(e) => passwordToggle(e.currentTarget)} style={{ color: "#3EC43E" }} className="toggle btn bg-white">Cancel</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    }
                </Container>
            </div>
            <Footer />
        </Fragment>
    )

}
export default Home

