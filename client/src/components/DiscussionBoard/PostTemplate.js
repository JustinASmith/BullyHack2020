import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Form from 'react-bootstrap/Form'
import {Row, Col, Container, Button,FormControl} from 'react-bootstrap'
function clicking(){
  return this.myInput.value
} 
function PostTemplate(props) {
    return (
    <div> <Container><div><h1>[CSE 1284] How do I do a for loop?</h1></div>
    <div><p>Hey guys how do I do a for loop in python? I can not figure it out.</p></div></Container> 
  <Container>  <Form><Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows="3"  placeholder="Please Enter here" />
  </Form.Group>
  </Form>
 <center>  <Button onClick={<FormControl inputRef={ref => { this.myInput = ref; }} />
} >Submit</Button></center>
  <div><h2>Comments</h2></div>


  </Container>
  
  </div>
    
    
      );
  }
  
export default PostTemplate
