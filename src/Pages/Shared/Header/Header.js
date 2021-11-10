import React from 'react';
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones,faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons'

import './Header.css'
const Header = () => {
    const element = <FontAwesomeIcon icon={faHeadphones} />
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    const heart = <FontAwesomeIcon icon={faHeart} />

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
                        <span className="me-3 ms-1 icon">{cart}</span>
                        <Link to="/login ">
                            <Button size="sm" variant="warning">
                                Login
                            </Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;