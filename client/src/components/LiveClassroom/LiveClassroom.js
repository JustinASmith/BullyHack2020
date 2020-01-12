import React from 'react';
import TimePicker from 'react-time-picker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button, Modal, Container, Card } from 'react-bootstrap'



function LiveClassroom() {
  const [lgShow, setLgShow] = React.useState(false);
  const [time, setTime] = React.useState('10:00');

  return (
    <Container>
    <Row>
        <h1 className = "mx-auto">
            Live Classroom
        </h1>
    </Row>
    <Row>
        <Col sm> 
         </Col>
         <Col sm> 
         </Col>
         <Col sm> 
         </Col>
         <Col sm> 
         </Col>
        <Col sm>
            <Button onClick={() => setLgShow(true)} variant="primary">Add a New Class</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="lg-add-modal"
            >
                <Modal.Header closeButton>
                <Modal.Title id="lg-add-modal-title">
                    Add a New Class
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Form.Group as={Row} controlId="formPlaintextClassName">
                    <Form.Label column sm="2">
                    Class Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Name of the Class" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextClassPasscode">
                    <Form.Label column sm="2">
                    Class Code
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Class Passcode (max. 8 chars)" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextClassExpiryTime">
                    <Form.Label column sm="2">
                    Class Expiry Time 
                    </Form.Label>
                    <Col sm="10">
                    <TimePicker
                    onChange={setTime}
                    value={time}
                     />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formPlaintextBooleanLog">
                    <Col sm="10">
                    <Form.Check type="checkbox" label="Email log of questions after class?" />
                    </Col>
                </Form.Group>


                {/*Add Button*/}
                <Form.Group as={Row} controlId="formAddButton">
                    <Col className="ml-auto" sm="10">
                    <Button variant="primary">Add</Button>
                    <Button className="justify-content-end" variant="danger">Cancel</Button>
                    </Col>
                </Form.Group>
                </Form>
                </Modal.Body>
            </Modal>
        </Col>
    </Row>
    <Row>
        <Col sm> 
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpREPkxnys0Llkiiak8gDjQtGu-MGHbBx-WSS5zx_ZTHO1x9bEw&s" />
            <Card.Body>
                <Card.Title>Introduction to CSE</Card.Title>
                <Button variant="success">Join Class</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col sm> <p> Live Classroom Page </p> </Col>
        <Col sm> Live Classroom Page </Col>
    </Row>
    </Container>
  );
}

export default LiveClassroom;
