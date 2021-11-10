import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth()
    const element = <FontAwesomeIcon icon={faHeadphones} />
    const Shoppingcart = <FontAwesomeIcon icon={faShoppingCart} />
    const heart = <FontAwesomeIcon icon={faHeart} />
    const [show, setShow] = useState(false);
    // modal er function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid>
            <div className="info ">
                <Row xs={2} md={3}>
                    <Col xs={8} md={6}>
                        <div className="d-flex">
                            <small className="info-text ms-3">Fast & Fresh </small>
                            <small className="info-text ms-3">Tasty & Delicious</small>
                            <small className="info-text ms-3">Accurate food  </small>
                        </div>
                    </Col>

                    <Col xs={4} md={6}>
                        <Row>
                            <Col></Col>
                            <Col></Col>

                            <Col>
                                <span className="info-text"><span>{element}</span> +8801952254063</span>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
            <Navbar className="navbar" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="fs-2 text-warning">FoodHungry</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home" className="link ms-3" >HOME</Link>
                            <Link to="/orders" className="link ms-3" >ORDERS</Link>
                            <Link to="/about" className="link ms-3" >ABOUT</Link>
                            <Link to="/contact" className="link ms-3">CONTACT</Link>

                        </Nav>
                        <input type="text" className="search me-1" placeholder="search" />
                        <span className="me-1 ms-1 icon">{heart}</span>
                        <button className="cart-button" onClick={handleShow}>
                            <span className="me-3 ms-1 icon">{Shoppingcart}</span>
                            <span className="cart-item">0</span>
                        </button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Order Summary</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Total: <span className="text-danger"> $</span></p>

                                <p>Shipping:<span className="text-danger"> $0</span></p>
                                <p>tax:<span className="text-danger"> $0</span></p>
                                <p>Grand Total:<span className="text-danger"> $0</span></p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Link to="/shipping">
                                    <Button variant="primary">
                                        Proceed
                                    </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>

                        <Navbar.Text>

                            {
                                user.email && <span className="text-dark fs-6 me-1">Welcome , <span className="text-danger">{user.displayName}</span></span>
                            }
                            <br />

                            {
                                user.email ? <div className="me-1">


                                    <Link to="/orders" className="me-1"> <Button variant="success" size="sm">My Orders</Button></Link>

                                    <Button onClick={logOut} variant="warning" size="sm" >Logout</Button>
                                </div> : <Link to="/login"><Button variant="warning" size="sm">Sign-in</Button></Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;