
import React, {useState} from 'react'
import MyOwnerLogin from './MyOwnerLogin';
import MyPassengerLogin from './MyPassengerLogin';
import {Navbar, Nav, NavDropdown, Modal} from 'react-bootstrap';
import './MyNavbar.css'
import MyRegister from './MyRegister';
import srmico from './srmtech.ico'
export default function MyNavbar() {

    const [showo, setShowo] = useState(false);
    const [showp, setShowp] = useState(false);
    const [showr, setShowr] = useState(false);
    const handleOClose = () => setShowo(false);
    const handlePClose = () => setShowp(false);
    const handleRClose = () => setShowr(false);
    const handleOShow = () => setShowo(true);
    const handlePShow = () => setShowp(true);
    const handleRShow = () => setShowr(true);
    return (
            <div className="MyNavbar">
                <Navbar id = "nav-bar" variant="custom" expand="lg">
                    <Navbar.Brand href="/home"><img
                        src={srmico}
                        width="120"
                        height="30"
                        className="d-inline-block align-top"
                        alt="SRMTech"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">Menu</Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link id = "nav-link" href="/home">Home</Nav.Link> */}
                            <Nav.Link id = "nav-link" onClick={handleRShow}>Register</Nav.Link>
                            <NavDropdown  title="Login" id="responsive-nav-dropdown">
                                <NavDropdown.Item onClick={handleOShow}>Owner</NavDropdown.Item>
                                <NavDropdown.Item onClick={handlePShow}>Passenger</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal size="md" show={showo} onHide={handleOClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <h2> Welcome Owner </h2>
                        </Modal.Header>
                        <MyOwnerLogin/>
                        </Modal>
                <Modal size="md" show={showp} onHide={handlePClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <h2> Welcome Passenger </h2>
                        </Modal.Header>
                        <MyPassengerLogin/>
                        </Modal>
                <Modal size="md" show={showr} onHide={handleRClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <h2> Register </h2>
                        </Modal.Header>
                        <MyRegister/>
                        </Modal>
            </div>     
    )
}