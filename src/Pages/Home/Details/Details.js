import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const { foodsId } = useParams()
    const [foods, setFoods] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${foodsId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFoods(data)
            })
    }, [])
    return (
        <Container fluid className="mt-5">
        <Row xs={1} md={3}>
            <Col md={2}></Col>
            <Col md={8}>
                <div className="details-card">
                    <div>
                        <img src={foods.img} alt="" />
                        <button className=" button-cart">Add to Cart</button><button className=" button-buy">Add to Cart</button>
                    </div>

                    <div className="details">
                        <p className=" text-start fs-4 ms-3">{foods.name}</p>

                       
                        <p className=" text-start ms-3"><span className="text-muted">
                            Price :
                        </span><span className="fs-5">
                                ${foods.price}
                            </span> </p>
                      

                    </div>

                </div>
            </Col>
            <Col md={2}></Col>
        </Row>

    </Container>
    );
};

export default Details;