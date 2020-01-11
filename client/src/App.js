import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Nav, Navbar, Form, Row, Col, Button, Modal } from 'react-bootstrap'
// HomePage
import HomePage from './components/HomePage';
import LiveClassroom from './components/LiveClassroom/LiveClassroom';
import DiscussionBoard from './components/DiscussionBoard/DiscussionBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [lgShow, setLgShow] = React.useState(false);

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">BullyHack2020</Navbar.Brand>
          <Nav className="mr-auto">
          <Link className="nav-link" exact to='/'>Home</Link>
          <Link className="nav-link" to='/discussion-board'>Discussion Board</Link>
          <Link className="nav-link" to='/live-classroom'>Live Classroom</Link>
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

          {/* LOGIN BUTTON ADN REGISTER LINK */}
          <Form.Group as={Row} controlId="formLoginButton">
              <Col className="ml-auto" sm="10">
              <Button variant="primary">Login</Button>
              <Button className="justify-content-end" variant="light">Register</Button>
              </Col>
          </Form.Group>
          </Form>
          </Modal.Body>
      </Modal>

      {/* ROUTING for pages */}
      <Switch>
        {/* HomePage Route */}
        <Route exact path="/">
          <HomePage />
        </Route>
<<<<<<< HEAD
        <Route exact path="/live-qa">
          <LiveQA />.
=======
        <Route exact path="/live-classroom">
          <LiveClassroom />
        </Route>
        <Route exact path="/discussion-board">
          <DiscussionBoard />
>>>>>>> 0cbd6473f884428e6494753325c7f3d98c972064
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
