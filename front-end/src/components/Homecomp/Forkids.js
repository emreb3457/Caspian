

import img from "../../images/Image.png"
import videoPicon from "../../images/icons/videoPicon.svg"
import Carousel from "react-multi-carousel";




export const Forkids = () => {
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
    return (
        <div id="courseSlider">
            <div className="topContent">
                <h3>For kids</h3>
                <p>Learn to speak English in online classes with native kid-friendly teachers</p>
            </div>
            <div classname="content">
                <div className="sliderCards">
                    <Carousel responsive={responsive} >
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card-item">
                                <div className="imgdiv">
                                    <img className="courseImg" alt="course" src={img} />
                                    <div className="lessonCount">
                                        <img alt="icon" src={videoPicon} /><span>25 videos</span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h4>English Juniors (4-15 ages)</h4>
                                    <span>Here is an explanation</span>
                                    <span className="Contus">Contact us</span>
                                    <button className="btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>
    )
}

export default Forkids