import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { coursesetRegister } from "../../actions/couseAction"
import courseimage from "../../images/Image.png"
const PaymentModal = (props) => {
    const dispatch = useDispatch()
    const setcourseRegister = () => {
        dispatch(coursesetRegister(props.course._id))
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Course</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="coursemodal">
                    <Row >
                        <Col lg="3">
                            <img alt="img" src={courseimage} />
                        </Col>
                        <Col lg="9">
                            <h4>{props.course.name}</h4>
                            <p>{props.course.description}</p>
                            <span>Price:</span><h3 className="d-inline-block">{props.course.price}$</h3>
                        </Col>
                    </Row>
                </div>
                <div className="modal-bottom">
                    <h3>Payment info</h3>
                    <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit.The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit.</p>
                </div>
            </Modal.Body>
            <div className="modal-button">
                <a target="_blank" href="https://wa.me/905347205019" onClick={() => setcourseRegister()} className="btn modalbtn">Confirm and contact</a>
                <button className="btn text-muted" onClick={props.onHide}><i className="fas fa-times pr-3"></i>Cancel</button>
            </div>
        </Modal >
    );
}
export default PaymentModal