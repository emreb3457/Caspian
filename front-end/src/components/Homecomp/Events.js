
import React, { useState } from "react"
import { Row, Col, Container } from 'react-bootstrap';
import calendar from "../../images/icons/minicalendar.svg"
import Moment from "react-moment"
import EventModal from "../layout/EventModal";


export const Events = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectcourse, setselectCourse] = useState();
    let course = props.course
    return (
        <div id="eventsDiv">
            <Container>
                <div className="topContent">
                    <h3>Upcoming events</h3>
                    <span>Here is some text</span>
                </div>
                <Row>
                    {course && course.map(x => {
                        if (x.events == true) {
                            return (
                                <Col lg="4" xs="12">
                                    <div key={x._id} className="cards" >
                                        <div className="card-items">
                                            <div className="card-head">
                                                <h4>{x.name}</h4>
                                                <span>By <span style={{ color: "#FF794C" }}>{x.postedBy.name}</span></span>
                                            </div>
                                            <div className="card-bottom">
                                                <span className="dates" ><img alt="icon" src={calendar} /><span className="date"><Moment format="DD/MM/YYYY" >{x.createdAt}</Moment></span></span>
                                                <button onClick={() => { setselectCourse(x); setModalShow(true) }} className="btn eventbtn">Join</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }
                    })
                    }
                </Row>
            </Container>
            <EventModal
                course={selectcourse}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Events