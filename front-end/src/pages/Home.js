import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom"
import tstlogo from "../images/iconsWhite/caspianLogowhite.svg"
import Instagram from "..//images/iconsWhite/Instagram.svg"
import Twitter from "../images/iconsWhite/Twitter.svg"
import Dribbble from "../images/iconsWhite/Dribbble.svg"
import Youtube from "../images/iconsWhite/Youtube.svg"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Getintouch from "../components/Homecomp/Getintouch"
import Topbout from "../components/Homecomp/Topabout"
import Whycomponent from "../components/Homecomp/Whycomponent"
import Forkids from "../components/Homecomp/Forkids"
import Foradults from "../components/Homecomp/Foradults"
import Explore from "../components/Homecomp/Explore"
import Events from "../components/Homecomp/Events"
import Comments from "../components/Homecomp/Comments"
const Home = () => {
    return (
        <div>
            <Header />
            <Topbout />
            <Whycomponent />
            <Forkids />
            <Foradults />
            <Explore />
            <Events />
            <Comments/>
            <Getintouch />
            <div style={{ backgroundColor: "#303030" }} className="footer-top ">
                <Container >
                    <Row>
                        <Col lg="5" xs="12">
                            <img alt="logo" className="footer-logo" src={tstlogo} />
                            <p className="footer-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit tincidunt id turpis est platea sed.</p>
                        </Col>
                        <Col lg="2" xs="6">
                            <h3 className="list-head text-white">Company</h3>
                            <ListGroup className="homeFooter" >
                                <ListGroup.Item><Link to="#About">About Us</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="#Contact">Contact Us</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="#Careers">Careers</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="#Press">Press</Link></ListGroup.Item>
                            </ListGroup>

                        </Col>
                        <Col lg="2" xs="6">
                            <h4 className="list-head text-white">General</h4>
                            <ListGroup className="homeFooter" >
                                <ListGroup.Item><Link to="#Courses">Courses</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="#Support">Support</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="#Pricing">Pricing</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="#Help">Help</Link></ListGroup.Item>
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
                    <div className="copy_right text-white">© 2021 Name. All rights reserved </div>
                    <div className="footer-buttom text-white"><a> Privacy Policy </a></div>
                    <div className="footer-buttom text-white"><a>Terms & Conditions </a></div>
                </Container>
            </div>

        </div>
    )
}
export default Home