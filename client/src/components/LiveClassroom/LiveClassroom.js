import React from 'react';
import TimePicker from 'react-time-picker';
import classPicture from'../../Assets/img/class.png'
import { Form, Row, Col, Button, Modal, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function LiveClassroom() {
  const [lgShow, setLgShow] = React.useState(false);
  const [time, setTime] = React.useState('10:00');
  const [show, setShow] = React.useState(false);
  const [code, setCode] = React.useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClassCode = (e) => {
      setCode(e.target.value);
      console.log(code)
  }

  return (
    <Container>
    <Row>
        <h1 className = "mx-auto">
            Live Classroom
        </h1>
    </Row>
    <Row className="mb-2">
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
        <Card className="mb-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={classPicture} />
            <Card.Body>
                <Card.Title>Introduction to CSE</Card.Title>
                <Button onClick={handleShow} variant="success">Join Class</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col sm> 
        <Card className="mb-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={classPicture} />
            <Card.Body>
                <Card.Title>Discrete Structures</Card.Title>
                <Button onClick={handleShow} variant="success">Join Class</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col sm> 
        <Card className="mb-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={classPicture} />
            <Card.Body>
                <Card.Title>Data Structures</Card.Title>
                <Button variant="success">Join Class</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col sm> 
        <Card className="mb-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={classPicture} />
            <Card.Body>
                <Card.Title>Formal Languages</Card.Title>
                <Button onClick={handleShow} variant="success">Join Class</Button>
            </Card.Body>
            </Card>
        </Col>

        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Enter Class Code</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group as={Row} controlId="formPlaintextClassName">
                    <Form.Label column sm="2">
                        Class Code
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={handleClassCode} type="text" placeholder="e.g. 1234" />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Link className="btn btn-primary" to="/live-classroom-chat" params={{ classCode: code}} >Join</Link>
            </Modal.Footer>
        </Modal>
    </Row>
    </Container>
  );
}

export default LiveClassroom;
