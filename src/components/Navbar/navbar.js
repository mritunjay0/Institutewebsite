import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import inst_logo from '../../Assets/inst_logo.jpg'
import { CgProfile } from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'
const NavbarHeader = () => {

    const navigate = useNavigate()

    return (
        <Navbar bg="light" expand="lg">
            <Container style={{
                display: "flex",
                justifyContent : 'space-between'
            }}>
                <div>
                    <Navbar.Brand href="#home">
                        <img
                            src={inst_logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand onClick={() => {navigate("/")}} style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        cursor:"pointer"
                    }}>PDPM IIITDM Jabalpur</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => { navigate("/home") }} className="navbar-titles">Home</Nav.Link>
                            <Nav.Link onClick={() => { navigate("/about") }} className="navbar-titles">About</Nav.Link>
                            <div className='navbar-titles'>
                            <NavDropdown title="Academics" id="basic-nav-dropdown" className="navbar-titles" style={{color : "black"}}>
                                <NavDropdown.Item href="#action/3.1">Academics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            </div>
                            <NavDropdown title="Admission" id="basic-nav-dropdown" className="navbar-titles" style={{color : "black"}}>
                                <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Community" id="basic-nav-dropdown" className="navbar-titles" style={{color : "black"}}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navbar-titles">Academic Calendar</Nav.Link>
                            
                            <Nav.Link className="navbar-titles"><AiOutlineSearch size={20}/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;