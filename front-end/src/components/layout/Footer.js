import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom"
import tstlogo from "../../images/caspianLogo.png"
import Instagram from "../../images/icons/Instagram.svg"
import Twitter from "../../images/icons/Twitter.svg"
import Dribbble from "../../images/icons/Dribbble.svg"
import Youtube from "../../images/icons/Youtube.svg"
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
                            <ListGroup.Item><Link to="#About">About Us</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="#Contact">Contact Us</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="#Careers">Careers</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="#Press">Press</Link></ListGroup.Item>
                        </ListGroup>

                    </Col>
                    <Col lg="2" xs="6">
                        <h4 className="list-head">General</h4>
                        <ListGroup >
                            <ListGroup.Item><Link to="#Courses">Courses</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="#Support">Support</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="#Pricing">Pricing</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="#Help">Help</Link></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="3" xs="12">
                        <h4 className="list-head">Social media</h4>
                        <ListGroup className="footer-icon" >
                        <Link to="#Courses"><img src={Instagram} /></Link>
                        <Link to="#Courses"><img src={Dribbble} /></Link>
                        <Link to="#Courses"><img src={Twitter} /></Link>
                        <Link to="#Courses"><img src={Youtube} /></Link>
                        </ListGroup>
                    </Col>
                </Row>
                <div  className="copy_right">© 2021 Name. All rights reserved </div>
                <div className="footer-buttom"><a> Privacy Policy </a></div>
                <div className="footer-buttom"><a>Terms & Conditions </a></div>
            </Container>
        </div>
    )
}

export default Footer
