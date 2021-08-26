
import { Container, Row, Col, Form } from 'react-bootstrap';
export const Getintouch = () => {

    return (
        <div className="getintouch">
            <Container className="getintouchDiv absolute-canter">
                <Row>
                    <Col className="left" lg="6">
                        <h4>Get in touch</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit tincidunt id turpis est platea sed.</p>
                    </Col>
                    <Col className="right" lg="6">
                        <Form>
                            <Form.Group style={{marginTop:"60px"}} className="mb-3 " controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Form>
                        <Row>
                            <Col lg="6">
                                <p>By clicking on the button, I agree to the processing of personal data</p>
                            </Col>
                            <Col lg="6">
                                <button className="btn mainbtn">Send</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Getintouch