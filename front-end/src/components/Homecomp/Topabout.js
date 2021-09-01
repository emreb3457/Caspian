
import { Container, Row, Col } from 'react-bootstrap';
import img from "../../images/topcontentimage.png"
import arrow from "../../images/icons/Arrow.svg"
export const Topabout = () => {

    return (
        <div id="topAbout">
            <Container className="">
                <Row>
                    <Col className="left" lg="6" xs="12">
                        <h1>About Caspian academy</h1>
                        <p className="paragraf">Caspian offers you a unique and private online learning experience with its expert teachers, engaging classes, different teaching techniques, and self-arranged schedules that will enable you to consider English as a natural process and speak it with confidence.</p>
                        <button  className="btn shadow-btn d-block">View courses<span className="iconSpan" ><img src={arrow}/></span></button> 
                        <span>No Credit Card Necessary</span>
                    </Col>
                    <Col className="right" lg="6" xs="12">
                     <div>
                         <img alt="topcontentimage" src={img}/>
                     </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Topabout