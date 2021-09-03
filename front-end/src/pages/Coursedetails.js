
import React, { Fragment, useState } from "react"
import { Row, Col, Container, Accordion } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import ellipse from "../images/icons/ellipse.svg"
import agegroup from "../images/icons/age-group.svg"
import calendar from "../images/icons/Calendar.svg"
import userline from "../images/icons/userline.svg"
import arrowdownload from "../images/icons/arrow.download.svg"
import pdf from "../images/icons/pdffile.svg"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import MetaData from "../components/layout/MetaData"


export const Coursedetails = () => {

    const [register, setRegister] = useState(1)


    const selectedItem = (e) => {

        e.style.background = "rgb(200, 198, 198,0.1)"
    }
    return (
        <Fragment>
            <Header />
            <MetaData title="Course Details" />
            <div id="course-details">
                <Container>
                    <div className="topContent">
                        <Row>
                            <div className="course-title">
                                <h2>English Juniors (4-15 ages)</h2>
                                <div>For kids</div>
                            </div>
                        </Row>
                        <Row>
                            <Col lg="9" >
                                <div>
                                    <ReactPlayer
                                        className="react-player"

                                        url='http://localhost:3001/coursevideo/4.%20Intensive%20English%20Lesson%2012.mp4'
                                        controls="true"
                                        onContextMenu={e => e.preventDefault()}
                                        config={{
                                            file: {
                                                attributes: {
                                                    controlsList: 'nodownload'
                                                }
                                            }
                                        }}
                                    />
                                    <div className="desc">
                                        <h5>
                                            Course description
                                        </h5>
                                        <p>Auctor sociis vel tincidunt a pretium fames magna. Arcu, sed adipiscing convallis amet eu feugiat nulla. Tristique quam eget in lorem. Sollicitudin metus ultricies consectetur aliquet vulputate. Libero risus euismod semper eu fermentum velit bibendum molestie suspendisse. Mattis euismod libero aenean metus, bibendum.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="course-video">
                                    <Accordion defaultActiveKey="0" flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span className="acc-head">Chapter 1<br /><small>5 lesson</small></span></Accordion.Header>

                                            <Accordion.Body>
                                                <div className="course-lesson " onClick={(e) => selectedItem(e.currentTarget)}>
                                                    <span> <img className="pb-4" alt="icon" src={ellipse} /></span>
                                                    <div className="ml-4 d-inline-block" >
                                                        <span className="">Lesson 1</span>
                                                        <h5>Ders ders ders</h5>
                                                    </div>
                                                </div>
                                                <div className="course-lesson ">
                                                    <span> <img className="pb-4" alt="icon" src={ellipse} /></span>
                                                    <div className="ml-4 d-inline-block">
                                                        <span className="">Lesson 2</span>
                                                        <h5>Ders ders ders</h5>
                                                    </div>
                                                </div>
                                                <div className="course-lesson ">
                                                    <span> <img className="pb-4" alt="icon" src={ellipse} /></span>
                                                    <div className="ml-4 d-inline-block">
                                                        <span className="">Lesson 4</span>
                                                        <h5>Ders ders ders</h5>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {register == 2 ?
                                    <button className="registerBtn btn">
                                        Register
                                    </button> :
                                    <div className="downloadfile">
                                        <div>
                                            <img alt="icon" src={arrowdownload} />
                                            <h4>Files to download</h4>
                                        </div>
                                        <div className="mb-3">
                                            <a className="text-reset" href="#">
                                                <img alt="icon" src={pdf} />
                                                <span className="ml-3">Present perfect tense</span>
                                            </a>
                                        </div>
                                        <div className="mb-3">
                                            <a className="text-reset" href="#">
                                                <img alt="icon" src={pdf} />
                                                <span className="ml-3">Present perfect tense</span>
                                            </a>
                                        </div>
                                        <div className="mb-3">
                                            <a className="text-reset" href="#">
                                                <img alt="icon" src={pdf} />
                                                <span className="ml-3">Present perfect tense</span>
                                            </a>
                                        </div>
                                    </div>
                                }

                            </Col>
                        </Row>
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
                                    <Accordion defaultActiveKey="0" flush>
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
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
            <Footer />
        </Fragment>
    )
}

export default Coursedetails