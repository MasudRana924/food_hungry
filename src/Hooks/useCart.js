import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../Utilities/FakeDb';

const useCart = () => {
    const [cart, setCart] = useState([])
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
    useEffect(() => {
        const savedCart = getStoredCart()
        console.log(savedCart)
        const name = Object.keys(savedCart)
        fetch('http://localhost:5000/foods/bynames', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(name)

        })
            .then(res => res.json())
            .then(foods => {

                if (foods.length) {

                    const storedCart = [];
                    for (const name in savedCart) {
                        const addedProduct = foods.find(product => product.name === name);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedCart[name];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct);
                        }
                    }
                    setCart(storedCart);
                }
            })

    }, [])
    return {
        cart,setCart
    }
};

export default useCart;