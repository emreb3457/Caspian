
import { Row, Col, Container } from 'react-bootstrap';
import frame from "../../images/Frame.svg"



export const Comments = () => {
    return (
        <div id="commentsDiv">
            <Container>
                <div className="topContent">
                    <h3>What people are saying</h3>
                </div>
                <div className="slider">
                    <div className="slider-item">
                        <p>I love the flexibility and it is fun. We talk about life, the environment, sports, war and lots of different topics. I like the freedom and NO TEXTBOOKS.</p>
                        <img alt="star" src={frame} />
                        <span>Ali Amonov</span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Comments