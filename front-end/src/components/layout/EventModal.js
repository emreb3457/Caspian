import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import courseimage from "../../images/Image.png"

const EventModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>About event</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h4>TOEFL preparation</h4>
                    <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit.The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit.</p>
                </div>
                <div className="modal-bottom">
                    <span style={{fontSize:"15px"}}><i className="fas fa-calendar pr-2"></i>13.12.2021</span>
                </div>
            </Modal.Body>
            <div className="modal-button">
                <Link className="btn modalbtn">Join for free</Link>
                <button className="btn text-muted" onClick={props.onHide}><i className="fas fa-times pr-3"></i>Cancel</button>
            </div>
        </Modal >
    );
}
export default EventModal