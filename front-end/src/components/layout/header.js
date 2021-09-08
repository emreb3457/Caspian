
import tstlogo from "../../images/icons/caspianLogoblack.svg"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { API_BASE, ContactNumber } from "../../config/env"

export const Header = () => {
    const { isAuthenticated, user, error, loading } = useSelector(state => state.auth);


    useEffect(() => {

    }, [user])
    return (
        <Navbar  >
            <Container>
                <Navbar.Brand as={Link} to="/"  ><img alt="logo" className="logo" src={tstlogo} /></Navbar.Brand>
                <Nav className="">
                    <Nav.Link to="#login" className="nav-menu" href="/#topAbout">Main</Nav.Link>
                    <Nav.Link to="#Juniors" className="nav-menu" href="/#forJuniors">Juniors</Nav.Link>
                    <Nav.Link to="#Juniors" className="nav-menu" href="/#forAdults">Adults</Nav.Link>
                    <Nav.Link to="#Juniors" className="nav-menu" target="_blank" href={`https://wa.me/9${ContactNumber}`}>Contact</Nav.Link>
                    {!isAuthenticated ?
                        <div style={{ display: "inline-flex" }}>
                            <Nav.Link as={Link} to="/login" className="btn nav-buttons shadow-none ml-4 ">Login</Nav.Link>
                            <Nav.Link as={Link} to="/login" style={{ background: "#228B22", color: "white" }} className="btn nav-buttons ">Sign up</Nav.Link>
                        </div>
                        : <Link to="/profile" className="head-user text-decoration-none">
                            <img alt="profile" src={`${API_BASE}/${user.avatar.url}`} />
                            <span className="text-capitalize">{user.name}</span>
                        </Link>
                    }
                    <Nav.Link href="#Eng" className="btn nav-buttons">Eng</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header