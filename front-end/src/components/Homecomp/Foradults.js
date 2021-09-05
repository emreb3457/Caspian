import videoPicon from "../../images/icons/videoPicon.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API_BASE } from "../../config/env";
import { Link } from "react-router-dom"


export const Foradults = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1650 },
            items: 4.5,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1650, min: 1300 },
            items: 3.5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
        }
    };
    let course = props.course
    return (
        <div id="courseSlider">
            <div className="topContent">
                <h3>For adults</h3>
                <p>     Learn to speak English fluently and gain confidence in online classes with expert teachers. We cover a wide range of topics for all levels, from basic everyday conversations to expressing opinions on complex topics.</p>
            </div>
            {course &&
                <div className="content">
                    <div className="sliderCards">
                        <Carousel responsive={responsive} >
                            {course.map(x => {
                                if (x.category == "For adults" && x.events == false) {
                                    return (
                                        <div key={x._id} >
                                            <div className="card-item">
                                                <div className="imgdiv">
                                                    <img className="courseImg" alt="course" src={`${API_BASE}/${x.images.url}`} />
                                                    <div className="lessonCount">
                                                        <img alt="icon" src={videoPicon} /><span>{x.lsn.length} videos</span>
                                                    </div>
                                                </div>
                                                <div className="card-text">
                                                    <h4>{x.name}</h4>
                                                    <span>{x.description}</span>
                                                    <span className="Contus">Contact us</span>
                                                    <Link to={`/course/${x._id}`} className="btn">Enroll</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}

                        </Carousel>
                    </div>
                </div>
            }
        </div>
    )
}

export default Foradults