import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Container } from "react-bootstrap"
const Aboutus = () => {

    return (
        <div className="aboutus">
            <Header />
            <Container>
                <div className="content">
                    <h3>About us</h3>
                    <div className="content-inner">
                        <p>Caspian offers you a unique and private online learning experience with its expert teachers, engaging classes, different teaching techniques, and self-arranged schedules that will enable you to consider English as a natural process and speak it with confidence.</p>
                        <p className="mt-5">Arzygul Allaberdiyeva</p>
                        <span>Founder of Caspian Academy</span>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
export default Aboutus