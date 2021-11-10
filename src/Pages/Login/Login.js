import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from './../../Hooks/useAuth';



const Login = () => {
    const { googleSignIn, setIsLoading } = useAuth()
    const location = useLocation()
    const location_url = location.state?.from || '/home'
    const history = useHistory()
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(location_url)

            })
            .finally(() =>
                setIsLoading(false)
            )
    }
    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <Container fluid className="mt-5 pt-5 pb-5 ">
            <Row xs={1} md={3}>
                <Col md={4}></Col>
                <Col md={4}>
                    <div className="login-card pb-5">

                        <h4 className="mt-1 text-primary text-start ms-5">Log-in with</h4>


                        <button onClick={handleGoogleLogIn} className="log-in-button mt-3 mb-3 w-75">
                            <span className="gogle-icon me-1">
                                {google}
                            </span> <span className="google">Continue with Google </span> </button>
                        <br />
                        <span>OR</span>

                        <form action="" className="login-form">
                            <input type="text" placeholder="Enter your name" />
                            <input type="text" placeholder="Enter your email" />
                            <input type="password" placeholder="Enter your password" />
                            <input type="password" placeholder="Confirm your password" /> <br />
                            <input type="submit" value="Log-in" className="submit w-75" />
                        </form>
                        <p className="">Don't have an account ? <Link to="/signup" className="text-decoration-none create">create a account  </Link></p>


                    </div>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default Login;