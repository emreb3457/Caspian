
import { Row, Col, Container } from 'react-bootstrap';
import calendar from "../../images/icons/minicalendar.svg"



export const Events = () => {
    return (
        <div id="eventsDiv">
            <Container>
                <div className="topContent">
                    <h3>Upcoming events</h3>
                    <span>Here is some text</span>
                </div>
                <Row>
                    <Col lg="4" xs="12">
                        <div className="cards" >
                            <div className="card-items">
                                <div className="card-head">
                                    <h4>ESL Seminar</h4>
                                    <span>By <span style={{ color: "#FF794C" }}>Name.S</span></span>
                                </div>
                                <div className="card-bottom">
                                    <span className="dates" ><img alt="icon" src={calendar} /><span className="date"> 28.05.2021</span></span>
                                    <button className="btn eventbtn">Join</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="cards" >
                            <div className="card-items">
                                <div className="card-head">
                                    <h4>ESL Seminar</h4>
                                    <span>By <span style={{ color: "#FF794C" }}>Name.S</span></span>
                                </div>
                                <div className="card-bottom">
                                    <span className="dates" ><img alt="icon" src={calendar} /><span className="date"> 28.05.2021</span></span>
                                    <button className="btn eventbtn">Join</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="cards" >
                            <div className="card-items">
                                <div className="card-head">
                                    <h4>ESL Seminar</h4>
                                    <span>By <span style={{ color: "#FF794C" }}>Name.S</span></span>
                                </div>
                                <div className="card-bottom">
                                    <span className="dates" ><img alt="icon" src={calendar} /><span className="date"> 28.05.2021</span></span>
                                    <button className="btn eventbtn">Join</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="cards" >
                            <div className="card-items">
                                <div className="card-head">
                                    <h4>ESL Seminar</h4>
                                    <span>By <span style={{ color: "#FF794C" }}>Name.S</span></span>
                                </div>
                                <div className="card-bottom">
                                    <span className="dates" ><img alt="icon" src={calendar} /><span className="date"> 28.05.2021</span></span>
                                    <button className="btn eventbtn">Join</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="cards" >
                            <div className="card-items">
                                <div className="card-head">
                                    <h4>ESL Seminar</h4>
                                    <span>By <span style={{ color: "#FF794C" }}>Name.S</span></span>
                                </div>
                                <div className="card-bottom">
                                    <span className="dates" ><img alt="icon" src={calendar} /><span className="date"> 28.05.2021</span></span>
                                    <button className="btn eventbtn">Join</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="cards" >
                            <div className="card-items">
                                <div className="card-head">
                                    <h4>ESL Seminar</h4>
                                    <span>By <span style={{ color: "#FF794C" }}>Name.S</span></span>
                                </div>
                                <div className="card-bottom">
                                    <span className="dates" ><img alt="icon" src={calendar} /><span className="date"> 28.05.2021</span></span>
                                    <button className="btn eventbtn">Join</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Events