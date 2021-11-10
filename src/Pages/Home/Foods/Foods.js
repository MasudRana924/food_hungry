import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Food from '../Food/Food';
import './Foods.css'
const Foods = () => {
    const [foods, setFoods] = useState([])
    const [displayFoods, setDisplayFoods] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 9

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.foods)
                setDisplayFoods(data.foods)
                const count = data.count
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])
    return (
        <Container fluid className="mt-3">
            <div className="">
                {displayFoods.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                </div>
                    : <Row xs={1} md={3} className="w-75 mx-auto">
                        {
                            displayFoods.map(food => <Food
                                key={food.name}
                                food={food}
                            ></Food>)
                        }
                    </Row>
                }
                <div className="pagination w-50 mx-auto">
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            key={number}
                            onClick={() => setPage(number)}
                            className={number === page ? 'selected' : ''}

                        >{number + 1}</button>)
                    }

                </div>
            </div>
        </Container>
    );
};

export default Foods;