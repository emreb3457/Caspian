
import frame from "../../images/Frame.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Comments = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1650 },
            items: 3 ,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1650, min: 1300 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div id="commentsDiv">
           
                <div className="topContent">
                    <h3>What people are saying</h3>
                </div>
                <Carousel responsive={responsive} >
                    <div className="slider">
                        <div className="slider-item">
                            <p>I love the flexibility and it is fun. We talk about life, the environment, sports, war and lots of different topics. I like the freedom and NO TEXTBOOKS.</p>
                            <img alt="star" src={frame} />
                            <span>Ali Amonov</span>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="slider-item">
                            <p>I love the flexibility and it is fun. We talk about life, the environment, sports, war and lots of different topics. I like the freedom and NO TEXTBOOKS.</p>
                            <img alt="star" src={frame} />
                            <span>Ali Amonov</span>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="slider-item">
                            <p>I love the flexibility and it is fun. We talk about life, the environment, sports, war and lots of different topics. I like the freedom and NO TEXTBOOKS.</p>
                            <img alt="star" src={frame} />
                            <span>Ali Amonov</span>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="slider-item">
                            <p>I love the flexibility and it is fun. We talk about life, the environment, sports, war and lots of different topics. I like the freedom and NO TEXTBOOKS.</p>
                            <img alt="star" src={frame} />
                            <span>Ali Amonov</span>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="slider-item">
                            <p>I love the flexibility and it is fun. We talk about life, the environment, sports, war and lots of different topics. I like the freedom and NO TEXTBOOKS.</p>
                            <img alt="star" src={frame} />
                            <span>Ali Amonov</span>
                        </div>
                    </div>
                </Carousel>
            
        </div>
    )
}

export default Comments
