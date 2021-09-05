import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom"
import { useAlert } from 'react-alert'
import { coursesetRegister, clearErrors } from "../../actions/couseAction"
import Moment from "react-moment"


const EventModal = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const alert = useAlert()
    const { error, isUpdated } = useSelector(state => state.course);
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            history.push(`/course/${props.course._id}`)
            dispatch({ type: "UPDATE_COURSE_RESET" })
        }
    }, [isUpdated,error])

    const onSubmit = () => {
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
                    <b>About event</b>
                </Modal.Title>
            </Modal.Header>
            {props.course &&
                <Fragment>
                    <Modal.Body>
                        <div>
                            <h4>{props.course.name}</h4>
                            <p>{props.course.description}</p>
                        </div>
                        <div className="modal-bottom">
                            <span style={{ fontSize: "15px" }}><i className="fas fa-calendar pr-2"></i><Moment format="DD/MM/YYYY" >{props.course.createdAt}</Moment></span>
                        </div>
                    </Modal.Body>
                    <div className="modal-button">
                        <button onClick={() => onSubmit()} className="btn modalbtn">Join for free</button>
                        <button className="btn text-muted" onClick={props.onHide}><i className="fas fa-times pr-3"></i>Cancel</button>
                    </div>
                </Fragment>}

        </Modal >
    );
}
export default EventModal