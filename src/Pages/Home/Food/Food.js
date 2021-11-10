import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = (props) => {
    const {_id, name, img, price, rating } = props.food
    return (
        <Col className="mt-5">
            <div className="card-style">
                <Link to={`/details/${_id}`}>
                    <img src={img} className="image rounded-circle" alt="" />
                </Link>
                <div className="price-rating mt-1">
                    <p className="name">{name}</p>
                    <button  className="button rounded-circle "><p className="plus ">+</p> </button>
                </div>


                <div className="price-rating">
                    <p className="price">${price}</p>
                    <p className="price">{rating}/5</p>
                </div>


            </div>
        </Col>
    );
};

export default Food;