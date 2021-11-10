import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './Details.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Details = () => {
    const {user}=useAuth()
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    const plus = <FontAwesomeIcon icon={faPlus} />
    const minus = <FontAwesomeIcon icon={faMinus} />
    const { foodsId } = useParams()
    const [foods, setFoods] = useState({})
    const [show, setShow] = useState(false);
    // modal er function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //  shipping 
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${foodsId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFoods(data)
            })
    }, [])
    const onSubmit = data => {

        reset()
    }
    return (
        <Container fluid className="mt-5">
            <Row xs={1} md={3}>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="details-card">
                        <Row xs={1} md={2}>
                            <Col>
                                <div>
                                    <img src={foods.img} alt="" />

                                </div>
                            </Col>
                            <Col>

                                <div className="details">
                                    <p className=" text-start fs-4 ms-3">{foods.name}</p>
                                    <p className=" text-start  ms-3">{foods.desc}</p>


                                    <div className="price-rating">
                                        <p className=" text-start ms-3"><span className="text-muted">
                                            Price :
                                        </span>
                                            <span className="price">
                                                ${foods.price}
                                            </span> </p>
                                        <span className="fs-6">
                                            rating : <span className="price">
                                                {foods.rating}/5
                                            </span>
                                        </span>
                                    </div>
                                    <div className="price-rating">
                                        <div className="center-item">
                                            <button id="case-minus" className="btn-plus">
                                                <span>
                                                    {minus}
                                                </span>
                                            </button>
                                            <input id="case-number" type="number" min="0" value="1" className="input" />
                                            <button className="btn-plus" id="case-plus">
                                                <span>
                                                    {plus}
                                                </span>
                                            </button>
                                        </div>
                                        <button onClick={handleShow} className="button-cart"> {cart} Order Now</button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{foods.name}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                                    {/* register your input into the hook by invoking the "register" function */}

                                                    <input defaultValue={user.displayName} {...register("name")} placeholder="Your name" />
                                                    {/* include validation with required or other standard HTML validation rules */}
                                                    <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your email" />
                                                    {/* errors will return when field validation fails  */}
                                                    {errors.email && <span className="error">This field is required</span>}
                                                    <input defaultValue="" {...register("phone")} placeholder="Your phone number" />
                                                    <input defaultValue="" {...register("address")} placeholder="Your  address" />
                                                    <input defaultValue="" {...register("city")} placeholder="Your city " />
                                                    <br />
                                                    <input type="submit" className="input-button" />
                                                </form>
                                            </Modal.Body>
                                          
                                        </Modal>
                                    </div>



                                </div>
                            </Col>

                        </Row>



                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>

        </Container>
    );
};

export default Details;