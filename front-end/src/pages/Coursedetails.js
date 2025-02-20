import React, { useEffect, useState, Fragment } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from 'react-alert'
import { Row, Col, Container, Accordion } from 'react-bootstrap';
import { getCourseDetails, clearErrors, setlessonWatch, setFinishCourse } from "../actions/couseAction"
import { API_BASE, ContactNumber } from "../config/env"
import Loader from "../components/loader"
import ReactPlayer from 'react-player'
import ellipse from "../images/icons/ellipse.svg"
import check from "../images/icons/check.svg"
import agegroup from "../images/icons/age-group.svg"
import calendar from "../images/icons/Calendar.svg"
import userline from "../images/icons/userline.svg"
import arrowdownload from "../images/icons/arrow.download.svg"

import pdf from "../images/icons/pdffile.svg"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import MetaData from "../components/layout/MetaData"
import Paymentmodal from '../components/layout/PaymentModal';



export const Coursedetails = ({ history, match }) => {
    window.scrollTo(0, 0)
    const alert = useAlert()
    const dispatch = useDispatch()
    const [register, setRegister] = useState(false)
    const [select, setSelect] = useState()
    const [selectLessonid, setLessonId] = useState()
    const [videourl, setVideoUrl] = useState("empty")
    const [modalShow, setModalShow] = useState(false);
    const { error, course, lesson, loading } = useSelector(state => state.courseDetails);
    const { error: courseerr, isUpdated } = useSelector(state => state.course);
    const { isAuthenticated, user, loading: usrloading } = useSelector(state => state.auth);
    const { isUpdated: watchUpdate } = useSelector(state => state.chapter);
    useEffect(() => {

        dispatch(getCourseDetails(match.params.id))

        if (error) {
            alert.error(error)
            dispatch(clearErrors());
            history.push("/notfound")
        }
        if (courseerr) {
            alert.error(courseerr)
            dispatch(clearErrors());
        }
        if (isUpdated) {
            alert.success("Registered please make your payment")
            dispatch({ type: "UPDATE_COURSE_RESET" })
        }
        if (watchUpdate) {

            dispatch({ type: "UPDATE_CHAPTER_RESET" })
        }
        if (course.registerusers) {
            course.registerusers.map(x => {
                if (x.userId == user._id) {
                    console.log("girdi")
                    if (x.status !== "not purchased") {
                        setRegister(true)
                    }
                }
            })
        }
    }, [dispatch, error, isUpdated, courseerr, , watchUpdate, alert])
    useEffect(() => {
        if (course.registerusers && user) {
            course.registerusers.map(x => {
                if (x.userId._id == user._id) {

                    if (x.status !== "not purchased") {
                        setRegister(true)
                    }
                }
            })
        }
    }, [dispatch, course, user])

    useEffect(() => {

    }, [dispatch, watchUpdate, lesson, user, course])

    const config = {
        attributes: {
            disablePictureInPicture: true,
            controlsList: 'nodownload'
        }
    };
    const selectedItem = (e, id) => {
        setLessonId(id)
        if (select) {
            select.style.background = "white"
        }
        e.style.background = "rgb(200, 198, 198,0.1)"
        setSelect(e)
    }
    const onSetVideoUrl = (e) => {
        let url = API_BASE + "/" + e
        setVideoUrl(url)
    }
    const onwatchLesson = () => {
        dispatch(setlessonWatch(selectLessonid))
        if (course && lesson && lesson.map && user) {
            let count = 1
            lesson.map(x => {
                x.watchUser.map(usr => {
                    if (usr == user._id) {
                        count++
                    }
                })
            })
            if (lesson.length == count) {
                dispatch(setFinishCourse(course._id))
            }
        }
    }

    return (
        <Fragment>
            <Header />
            <MetaData title="Course Details" />
            <div id="course-details">
                <Container>

                    <div className="topContent">
                        {loading ? <Loader /> :
                            course && <Fragment>
                                <Row>
                                    <div className="course-title">
                                        <h2>{course.name}</h2>
                                        <div>{course.category}</div>
                                    </div>
                                </Row>
                                <Row>
                                    <Col lg="9" >
                                        <div>
                                            <ReactPlayer
                                                className="react-player"
                                                url={videourl}
                                                controls={true}
                                                onContextMenu={e => e.preventDefault()}
                                                config={config}
                                                onEnded={() => onwatchLesson()}
                                            />
                                            <div className="desc">
                                                <h5>
                                                    Course description
                                                </h5>
                                                <p>{course.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="3">
                                        <div className="course-video">
                                            <Accordion defaultActiveKey="0" flush>
                                                {course && course.chapter && course.chapter.map((chp, index) =>
                                                    <Accordion.Item key={chp._id} eventKey={index}>
                                                        <Accordion.Header><span className="acc-head">{chp.title}<br /><small>Lessons</small></span></Accordion.Header>
                                                        <Accordion.Body>
                                                            {lesson && user && lesson.map && lesson.map((lsn, i) => {
                                                                if (lsn.chapterId == chp._id) {
                                                                    let chck = lsn.watchUser.filter(x => x == user._id)
                                                                    if (register) {
                                                                        return (
                                                                            <div key={lsn._id} className="course-lesson " onClick={(e) => { selectedItem(e.currentTarget, lsn._id); onSetVideoUrl(lsn.videoUrl) }}>
                                                                                {user && lsn.watchUser && lsn.watchUser.map && chck.length !== 0 ? <span> <img className="pb-4" alt="icon" src={check} /></span> : <span> <img className="pb-4" alt="icon" src={ellipse} /></span>}
                                                                                <div className="ml-4 d-inline-block" >
                                                                                    <span className="">{`Lesson ${i}`}</span>
                                                                                    <h5>{lsn.title}</h5>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                    else {
                                                                        return (
                                                                            <div key={lsn._id} className="course-lesson disable ">
                                                                                <span> <img className="pb-4" alt="icon" src={ellipse} /></span>
                                                                                <div className="ml-4 d-inline-block" >
                                                                                    <span className="">{`Lesson ${i}`}</span>
                                                                                    <h5>{lsn.title}</h5>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                }
                                                            })}
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                )}

                                            </Accordion>
                                        </div>
                                        {!register ?
                                            <button className="registerBtn btn" onClick={() => { isAuthenticated ? setModalShow(true) : history.push("/login") }}>
                                                Register
                                            </button> :
                                            <div className="downloadfile">
                                                <div>
                                                    <img alt="icon" src={arrowdownload} />
                                                    <h4>Files to download</h4>
                                                </div>
                                                {course && course.downloadsfile && course.downloadsfile.map(dwn =>
                                                    <div className="mb-3">
                                                        <a target="_blank" className="text-reset" href={`${API_BASE}/${dwn.url}`}>
                                                            <img alt="icon" src={pdf} />
                                                            <span className="ml-3">{dwn.orjname}</span>
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    </Col>
                                </Row>
                            </Fragment>

                        }

                        <Row>
                            <Col lg="8">
                                <div className="bottom-content">
                                    <div id="included">
                                        <h3>What’s included</h3>
                                        <Row>
                                            <Col lg="4">
                                                <div style={{ background: "#E0EEF7" }} className="cards">
                                                    <img alt="icon" src={userline} />
                                                    <h4>1 - on - 1 instruction</h4>
                                                    <p>Delicious picnic lunch. Please let us know if you have any dietary requirem...</p>
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div style={{ background: "#D3EEDC" }} className="cards">
                                                    <img alt="icon" src={calendar} />
                                                    <h4>Flexible scheduling</h4>
                                                    <p>Delicious picnic lunch. Please let us know if you have any dietary requirem...</p>
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div style={{ background: "rgba(255, 209, 102, 0.25)" }} className="cards">
                                                    <img alt="icon" src={agegroup} />
                                                    <h4>Ages 4 - 15</h4>
                                                    <p>Delicious picnic lunch. Please let us know if you have any dietary requirem...</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Accordion style={{ marginTop: "97px" }} defaultActiveKey="0" flush>
                                        <h1>Frequently asked questions</h1>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>01<span className="acc-head">Why start them speaking this early?</span></Accordion.Header>
                                            <Accordion.Body>
                                                The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>02<span className="acc-head">Why start them speaking this early?</span></Accordion.Header>
                                            <Accordion.Body>
                                                The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>03<span className="acc-head">Why start them speaking this early?</span></Accordion.Header>
                                            <Accordion.Body>
                                                The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="contactUs">
                                        <h3>Contact us to test your level and register</h3>
                                        <a target="_blank" href={`https://wa.me/9${ContactNumber}`} className="btn text-reset">Contact Us</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Paymentmodal
                    course={course}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div >
            <Footer />
        </Fragment >
    )
}

export default Coursedetails