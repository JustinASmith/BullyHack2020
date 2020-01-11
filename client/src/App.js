import React from 'react';
import { Nav, Navbar, Form, Row, Col, Button, Modal } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [lgShow, setLgShow] = React.useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BullyHack2020</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#discussion">Discussion</Nav.Link>
          <Nav.Link href="#live-chat">Live Chat</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Button onClick={() => setLgShow(true)} variant="primary">Login / Register</Button>
        </Nav>
      </Navbar>

      {/* MODAL: This is not shown unless lgShow ^^^ is set to true. */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="lg-login-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="lg-login-modal-title">
            Login or Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
