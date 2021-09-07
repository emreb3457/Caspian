import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom"
import tstlogo from "../../images/caspianLogo.png"
import Instagramicon from "../../images/icons/Instagram.svg"
import Twittericon from "../../images/icons/Twitter.svg"
import Dribbbleicon from "../../images/icons/Dribbble.svg"
import Youtubeicon from "../../images/icons/Youtube.svg"
import { ContactNumber,Instagram,Twitter,Dribbble,Youtube } from "../../config/env"
const Footer = () => {


    return (
        <div className="footer-top">
            <Container >
                <Row>
                    <Col lg="5" xs="12">
                        <img alt="logo" className="footer-logo" src={tstlogo} />
                        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit tincidunt id turpis est platea sed.</p>
                    </Col>
                    <Col lg="2" xs="6">
                        <h3 className="list-head">Company</h3>
                        <ListGroup >
                            <ListGroup.Item><Link to="/about">About Us</Link></ListGroup.Item>
                            <ListGroup.Item><a target="_blank" href={`https://wa.me/9${ContactNumber}`}>Contact Us</a></ListGroup.Item>
                            <ListGroup.Item><Link to="#Careers">Careers</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="#Press">Press</Link></ListGroup.Item>
                        </ListGroup>

                    </Col>
                    <Col lg="2" xs="6">
                        <h4 className="list-head">General</h4>
                        <ListGroup >
                            <ListGroup.Item><a href="#forJuniors">Courses</a></ListGroup.Item>
                            <ListGroup.Item><a href="#Support">Support</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="3" xs="12">
                        <h4 className="list-head">Social media</h4>
                        <ListGroup className="footer-icon" >
                            <a href={Instagram}><img src={Instagramicon} /></a>
                            <a href={Dribbble}><img src={Dribbbleicon} /></a>
                            <a href={Twitter}><img src={Twittericon} /></a>
                            <a href={Youtube}><img src={Youtubeicon} /></a>
                        </ListGroup>
                    </Col>
                </Row>
                <div className="copy_right">© 2021 Name. All rights reserved </div>
                <div className="footer-buttom"><a> Privacy Policy </a></div>
                <div className="footer-buttom"><a>Terms & Conditions </a></div>
            </Container>
        </div>
    )
}

export default Footer
