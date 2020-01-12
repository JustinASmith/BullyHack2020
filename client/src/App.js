import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Nav, Navbar, Form, Row, Col, Button, Modal } from 'react-bootstrap'
// HomePage
import axios from "axios";
import HomePage from './components/HomePage';
import LiveClassroom from './components/LiveClassroom/LiveClassroom';
import DiscussionBoard from './components/DiscussionBoard/DiscussionBoard';
import LiveClassroomChat from './components/LiveClassroom/LiveClassroomChat';
import PostTemplate from './components/DiscussionBoard/PostTemplate'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [lgShow, setLgShow] = React.useState(false);
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  function postSubmit () {
    
    const user = {
        email: email,
        password: password
    }
    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        .catch((err) => {
            console.log(err);
        });
    
    setEmail("");
    setPassword("");
  }
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
          <Link className="navbar-brand" exact to='/'>BeLively</Link>
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
              <Form.Control type="text" 
              required 
              placeholder="email@example.com"
              value={email}
              onChange={(e)=> setEmail(e.target.value)} />
              </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
              Password
              </Form.Label>
              <Col sm="10">
              <Form.Control type="password" 
              required
              placeholder="Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)} />
              </Col>
          </Form.Group>

          {/* LOGIN BUTTON ADN REGISTER LINK */}
          <Form.Group as={Row} controlId="formLoginButton">
              <Col className="ml-auto" sm="10">
              <Button variant="primary">Login</Button>
              <Button className="justify-content-end" 
              onClick={()=> postSubmit()}
              variant="light">Register</Button>
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
        <Route exact path="/live-classroom">
          <LiveClassroom />
        </Route>
        <Route exact path="/live-classroom-chat">
          <LiveClassroomChat />
        </Route>
        <Route exact path="/discussion-board">
          <DiscussionBoard />
        </Route>
        <Route exact path="/post-template">
          <PostTemplate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
