import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import butlerhall from'../Assets/img/butlerHall.jpg'
import discussBoard from'../Assets/img/discussBoard.jpg'
import liveChat from'../Assets/img/liveChat.jpg'
import "./HomePage.css"



export default function HomePage() {
    
    return (
    <div>

    <div className="HomeCarousel">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={butlerhall}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Bulldog classroom</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={butlerhall}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Discussion Boards</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <img
                className="d-block w-100 h-50"
                src={discussBoard}
                alt="Forums"
                />
                <div className="cardPadding">
                    <h1 style={{ textAlign: "center" }}>
                        Discussion Boards
                    </h1>
                </div>
                <p style={{ textAlign: "center" }}>Our website offers forums for Mississippi State Computer Science students to come and share ideas as well as ask questions relevant to coursework.</p>
            </div>
            <div className="col-lg-6">
                <img
                className="d-block w-100 h-50"
                src={liveChat}
                alt="Live Chat"
                />
                <div className="cardPadding">
                    <h1 style={{ textAlign: "center" }}>
                        Live Classroom Chat
                    </h1>
                </div>
                <p style={{ textAlign: "center" }}>Our live classroom chat allows students to ask questions, while anonymously to other students, to teachers live during class. </p>
            </div>
        </div>
    </div>
    
    </div>
    )
}
