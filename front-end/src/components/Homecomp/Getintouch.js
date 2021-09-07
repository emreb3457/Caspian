
import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import {E_MAIL} from "../../config/env"
export const Getintouch = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    return (
        <div className="getintouch">
            <Container className="getintouchDiv absolute-canter">
                <Row>
                    <Col className="left" lg="6">
                        <h4>Get in touch</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit tincidunt id turpis est platea sed.</p>
                    </Col>
                    <Col className="right" lg="6">
                        <Form href="mailto:emrebaskayaaa@gmail.com?subject=SendMail&body=Description"  >
                            <Form.Group style={{ marginTop: "60px" }} className="mb-3 " controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
                            </Form.Group>
                            <Row>
                                <Col lg="6">
                                    <p>By clicking on the button, I agree to the processing of personal data</p>
                                </Col>
                                <Col lg="6">
                                    <a href={`mailto:${E_MAIL}?subject=Caspian&body=Name:${name}
                                    E-mail:${email}
                                    Message:${message}`} style={{ color: "white" }} className="btn mainbtn">Send</a>
                                </Col>
                            </Row>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Getintouch