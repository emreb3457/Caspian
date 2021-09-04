
import { Container, Row, Col } from 'react-bootstrap';
import img from "../../images/topcontentimage.png"
import man from "../../images/man2.png"
import bagicon from "../../images/icons/Bag.svg"
import bag2icon from "../../images/icons/Bag2.svg"
import usersicon from "../../images/icons/Users.svg"
import cube from "../../images/icons/cube.svg"
export const Whycomponent = () => {

    return (
        <div id="whyCaspian">
            <Container className="">
                <Row className="whycaspianRow">
                    <Col className="whycaspianHead" lg="12">
                        <h1>Why Caspian?</h1>
                        <p className="paragraf">Caspian is a language learning academy that has personal expert teachers when and where<br/>you need them.</p>
                    </Col>
                    <Col className="cards" lg="12" >
                        <Row>
                            <Col className="card-item" lg="4" sm="12">
                                <div>
                                    <div className=""><img alt="icon" src={bagicon} /></div>
                                    <span>Guarantees that you will achieve your and your children’s language goals.</span>
                                </div>
                            </Col>
                            <Col className="card-item" lg="4" sm="12">
                                <div>
                                    <div><img alt="icon" src={bag2icon} /></div>
                                    <span>Focuses on English as a language, not a school subject</span>
                                </div>
                            </Col>
                            <Col className="card-item" lg="4" sm="12">
                                <div>
                                    <div><img alt="icon" src={usersicon} /></div>
                                    <span>Supports your and your children's extracurricular language needs with engaging activities.</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="hide-div"></div>
            <div id="whatitmeans">
                <Row>
                    <Col lg="6" xs="12">
                        <div className="image">
                            <img alt="man" src={man} />
                        </div>
                    </Col>
                    <Col lg="6" xs="12">
                        <div className="content">
                            <h3>What it means <br />
                                to be a part of Caspian
                            </h3>
                            <Row className="mt-4">
                                <Col className="left" lg="3">
                                    <div className="rectangle1">
                                        1
                                    </div>
                                </Col>
                                <Col className="right" lg="9">
                                    <div>
                                        <h4>Explanatory article</h4>
                                        <p>Caspian has a multicultural environment, therefore many different learning experiences and ideas take root here. </p>
                                    </div>

                                </Col>
                            </Row>

                            <Row style={{ marginTop: "30px" }}>
                                <Col className="left" lg="3">
                                    <div className="rectangle2">
                                        2
                                    </div>
                                </Col>
                                <Col lg="9">
                                    <div style={{ marginBottom: "70px" }}>
                                        <h4>Explanatory article</h4>
                                        <p>Caspian has a multicultural environment, therefore many different learning experiences and ideas take root here. </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Whycomponent