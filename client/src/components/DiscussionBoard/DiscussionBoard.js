import React, { Component} from 'react'
import { Tab,Tabs,InputGroup,FormControl,Dropdown,DropdownButton,Form,ListGroup, ButtonToolbar,Button, Container} from 'react-bootstrap';

function alertClicked() {
  alert('You clicked Top');
}
function alertClicked2() {
  alert('You clicked Newest');
}
function alertClicked3() {
  alert('You clicked By Class');
}
function alertClicked4() {
  alert('You clicked Submit');
}
//DUMMY data for taking in posts 
const array1 = [1, 4, 9,4,7,12, 16];
function iterate_list(){
  let total = array1.map(function(num){
    return (<ListGroup.Item action onClick={alertClicked}>
      {num}
    </ListGroup.Item>)
  })
  return total;
}



export default class LiveClassroom extends Component {


    render() {
        const number = 4;


        return (
            <>
  <div> 
      <center><h1>Discussion Board</h1></center>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Search">
  <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Search by: "
      id="input-group-dropdown-1">
      <Dropdown.Item onClick={alertClicked} >Top</Dropdown.Item>
      <Dropdown.Item onClick={alertClicked2}>Newest</Dropdown.Item>
      <Dropdown.Item onClick={alertClicked3}>By Class</Dropdown.Item>
      <Dropdown.Divider />
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>
  <div>
  <ListGroup defaultActiveKey="#link1">
  {iterate_list()}
  </ListGroup>,
  </div>


  </Tab>
  <Tab eventKey="profile" title="Add">
    <div>
    <Container>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Title..." />
  </Form.Group>
    <Form><Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Body</Form.Label>
    <Form.Control as="textarea" rows="3"  placeholder="Please Enter here" />
  </Form.Group>
  <ButtonToolbar>
  <center>  <Button onClick={alertClicked4} >Submit</Button></center> 
  </ButtonToolbar>
  </Form>
    </Container>
  
  </div>
  </Tab>
 
</Tabs>


</div>

            </>
        )
    }
}
