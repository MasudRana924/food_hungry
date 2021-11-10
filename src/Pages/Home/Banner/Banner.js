import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
      <Container fluid >
           <Carousel className="banner" >
                <Carousel.Item  className="banner">
                    <img
                        className="d-block w-100 image-banner "
                        src="https://image.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg"
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100 image-banner"
                        src="https://image.freepik.com/free-photo/chopped-minced-chicken-mushroom-salad-with-colorful-bell-peppers-fresh-parsley_114579-1873.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100 image-banner"
                        src="https://image.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100 image-banner"
                        src="https://image.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg"
                        alt="Fouth slide"
                    /> 
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100 image-banner"
                        src="https://image.freepik.com/free-photo/fresh-cola-drink-with-green-lime_144627-12396.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100  image-banner"
                        src="https://image.freepik.com/free-photo/top-view-different-little-cakes-with-cream-fresh-sliced-fruits-grey-blue-backgound-fruit-cake_140725-22716.jpg"
                        alt="Six slide"
                    />
                </Carousel.Item>
            </Carousel>
      </Container>
    );
};

export default Banner;