import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import butlerhall from'../Assets/img/butlerHall.jpg'
import "./HomePage.css"



export default function HomePage() {
    
    return (
    

    <div class="HomeCarousel">
        <Carousel>
            <Carousel.Item>
                <img class="imgSettings"
                className="d-block w-100"
                src={butlerhall}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Bulldog classroom</h3>
                <p>hello there</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={butlerhall}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>second</h3>
                <p>this the second </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={butlerhall}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>third</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    )
}
