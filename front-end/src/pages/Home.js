import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert'
import { getCourse, clearErrors } from '../actions/couseAction';
import Moment from "react-moment"
import tstlogo from "../images/iconsWhite/caspianLogowhite.svg"
import Instagram from "..//images/iconsWhite/Instagram.svg"
import Twitter from "../images/iconsWhite/Twitter.svg"
import Dribbble from "../images/iconsWhite/Dribbble.svg"
import Youtube from "../images/iconsWhite/Youtube.svg"
// import Header from "../components/layout/Header"
import Getintouch from "../components/Homecomp/Getintouch"
import Topbout from "../components/Homecomp/Topabout"
import Whycomponent from "../components/Homecomp/Whycomponent"
import Forkids from "../components/Homecomp/Forkids"
import Foradults from "../components/Homecomp/Foradults"
import Explore from "../components/Homecomp/Explore"
import Events from "../components/Homecomp/Events"
import Comments from "../components/Homecomp/Comments"
import Loader from "../components/loader"
import { Fragment } from 'react';
import MetaData from '../components/layout/MetaData';
import { ContactNumber } from "../config/env"
const Home = () => {
    const dispatch = useDispatch();
    const alert = useAlert()


    const { loading } = useSelector(state => state.auth)
    const { error, courses } = useSelector(state => state.coursies);

    useEffect(() => {
        dispatch(getCourse());
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert])
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])
    return (
        <Fragment>
            <MetaData title="Home Page" />
            {loading ? <Loader /> :
                <Fragment>
                    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                        {/* <Header /> */}
                        <Topbout />
                        <Whycomponent />
                        <Forkids course={courses} />
                        <Foradults course={courses} />
                        <Explore />
                        <Events course={courses} />
                        <Comments />
                        <Getintouch />
                        <div style={{ backgroundColor: "#303030" }} className="footer-top ">
                            <Container >
                                <Row>
                                    <Col lg="5" xs="12">
                                        <img alt="logo" className="footer-logo" src={tstlogo} />
                                        <p className="footer-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.In blandit tincidunt id turpis est platea sed.</p>
                                    </Col>
                                    <Col lg="2" xs="6">
                                        <h3 className="list-head text-white">Company</h3>
                                        <ListGroup className="homeFooter" >
                                            <ListGroup.Item><Link to="/about">About Us</Link></ListGroup.Item>
                                            <ListGroup.Item><a target="_blank" href={`https://wa.me/9${ContactNumber}`}>Contact Us</a></ListGroup.Item>
                                            <ListGroup.Item><Link to="#Careers">Careers</Link></ListGroup.Item>
                                            <ListGroup.Item><Link to="#Press">Press</Link></ListGroup.Item>
                                        </ListGroup>

                                    </Col>
                                    <Col lg="2" xs="6">
                                        <h4 className="list-head text-white">General</h4>
                                        <ListGroup className="homeFooter" >
                                            <ListGroup.Item><a href="#forJuniors">Courses</a></ListGroup.Item>
                                            <ListGroup.Item><a to="#Support">Support</a></ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col lg="3" xs="12">
                                        <h4 className="list-head text-white">Social media</h4>
                                        <ListGroup className="footer-icon" >
                                            <Link to="#Courses"><img src={Instagram} /></Link>
                                            <Link to="#Courses"><img src={Dribbble} /></Link>
                                            <Link to="#Courses"><img src={Twitter} /></Link>
                                            <Link to="#Courses"><img src={Youtube} /></Link>
                                        </ListGroup>
                                    </Col>
                                </Row>
                                <div className="copy_right text-white">© 2021 Name.All rights reserved </div>
                                <div className="footer-buttom text-white"><a> Privacy Policy </a></div>
                                <div className="footer-buttom text-white"><a>Terms & Conditions </a></div>
                            </Container>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )

}
export default Home