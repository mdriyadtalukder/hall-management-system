import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;