
import img from "../../images/1.png"
import tstlogo from "../../images/icons/caspianLogoblack.svg"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    return (
        // <Navbar  >
        //     <Container>
        //         <Navbar.Brand href="#home" ><img alt="logo" className="logo" src={tstlogo} /></Navbar.Brand>
        //         <Nav className="">
        //             <Link act className="nav-menu nav-link" to="#">Main</Link>
        //             <Link className="nav-menu nav-link" to="#">Juniors</Link>
        //             <Link className="nav-menu nav-link" to="#">Adults</Link>
        //             <Link className="nav-menu nav-link" to="#">Contact</Link>
        //             <Link className="btn nav-buttons shadow-none nav-link" to="/login">Login</Link>
        //             <Link to="#Sign" style={{ background: "#228B22", color: "white" }} className="btn nav-buttons ">Sign up</Link>
        //             <Link to="#Sign" className="btn nav-buttons">Eng</Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
        <Navbar  >
            <Container>
                <Navbar.Brand href="#home" ><img alt="logo" className="logo" src={tstlogo} /></Navbar.Brand>
                <Nav className="">
                    <Nav.Link as={Link} to="#login" className="nav-menu" href="#login">Main</Nav.Link>
                    <Nav.Link as={Link} to="#Juniors" className="nav-menu" href="#Juniors">Juniors</Nav.Link>
                    <Nav.Link as={Link} to="#Juniors" className="nav-menu" href="#Adults">Adults</Nav.Link>
                    <Nav.Link as={Link} to="#Juniors" className="nav-menu" href="#Contact">Contact</Nav.Link>
                    {!isAuthenticated ?
                        <div style={{ display: "inline-flex" }}>
                            <Nav.Link as={Link} to="/login" className="btn nav-buttons shadow-none ">Login</Nav.Link>
                            <Nav.Link as={Link} to="/login" style={{ background: "#228B22", color: "white" }} className="btn nav-buttons ">Sign up</Nav.Link>
                        </div>
                        : <div> </div>
                    }
                    <Nav.Link href="#Eng" className="btn nav-buttons">Eng</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header