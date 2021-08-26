
import { Row, Col, Container } from 'react-bootstrap';
import ellips from "../../images/Ellipse.svg"



export const Explore = () => {
    return (
        <div id="exploreDiv">
            <Container>
                <Row>
                    <Col lg="5" xs="12">
                        <div className="left-content">
                            <div className="box">
                                <img alt="ellipse" src={ellips} />
                            </div>
                        </div>
                    </Col>
                    <Col lg="2">
                    </Col>
                    <Col lg="5" xs="12">
                        <div className="right-content">
                            <h3>Caspian at a Glance</h3>
                            <p>
                                Students from multiple countries Engaging English
                                resources Various self-developing projects Student-centered learning Rich and Balanced curriculum
                                Expert Teachers
                            </p>
                           <div> <hr /><span>EXPLORE COURSES</span></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Explore