import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Link } from "react-router-dom"
import image from "../images/404page.png"

const page404 = () => {

    return (
        <div className="page404">
            <Header />
            <div className="content">
                <img className="errimage" alt="image" src={image} />
                <h1>404 Error!</h1>
                <p>The page you are looking for is not available or doesn’t belong to this website!</p>
                <Link to="/" className="btn mainbtn">Go back to home</Link>
            </div>
            <Footer />
        </div>
    )
}
export default page404