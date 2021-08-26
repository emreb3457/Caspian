
import img from "../../images/1.png"
import tstlogo from "../../images/icons/caspianLogoblack.svg"
import { Navbar, Container, Nav } from 'react-bootstrap';
export const Header = () => {

    return (
        <Navbar  >
            <Container>
                <Navbar.Brand href="#home" ><img alt="logo" className="logo" src={tstlogo} /></Navbar.Brand>
                <Nav className="">
                    <Nav.Link className="nav-menu" href="#Main">Main</Nav.Link>
                    <Nav.Link className="nav-menu" href="#Juniors">Juniors</Nav.Link>
                    <Nav.Link className="nav-menu" href="#Adults">Adults</Nav.Link>
                    <Nav.Link className="nav-menu" href="#Contact">Contact</Nav.Link>

                    <Nav.Link href="#Login" className="btn nav-buttons shadow-none ">Login</Nav.Link>
                    <Nav.Link href="#Sign" style={{ background: "#228B22", color: "white" }} className="btn nav-buttons ">Sign up</Nav.Link>
                    <Nav.Link href="#Eng" className="btn nav-buttons">Eng</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header