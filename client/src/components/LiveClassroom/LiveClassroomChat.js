import React from 'react'
import io from "socket.io-client";

import { Form, Row, Col, Button, Modal, Container, Card } from 'react-bootstrap'
const socket = io.connect('http://localhost:3001');

socket.on('chat message', (msg) => {
    console.log(msg)
})

const connectToClass = (room) => {
    socket.emit('connectToClass', room);
}

const chatMessage = (msg) => {
    socket.emit('chat message', msg);
}

const renderMessages = (arr) => {
    const data = arr.map(obj => {
       return <p className="m-2">test</p>
    })
    return data;
}

export default function LiveClassroomChat(props) {
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState('');

    return (
        <Container>
            <Row>
                <h1 className="mx-auto">
                    Introduction to CSE Classroom
                </h1>
            </Row>
            <Row className="mx-auto m-2" style={{backgroundColor: "#efefef", height: "40vh", width: "75%", border: '1px solid #ddd'}}>
                <Col className="p-2">
                    <div className="text-right">
                        <p className="m-3">Hey, how do you use that variable within that function?</p>
                        <p className="m-3">What is the purpose of declaring as an int instead of double?</p>
                        <p className="m-3">Do we need to include that header?</p>
                    </div>
                </Col>
            </Row>
            <Row className="mx-auto m-2" style={{width: "75%"}}>
                <Col sm="12" className="mx-auto">
                    <Form.Control placeholder="Chat here..." />
                </Col>
                <Col sm="12">
                    <Button className="ml-auto mt-2" variant="primary" type="submit" onClick={() => chatMessage(message)}>
                        Send
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
