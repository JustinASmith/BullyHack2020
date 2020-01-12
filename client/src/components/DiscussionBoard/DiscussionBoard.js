import React, { Component} from 'react'
import { Tab,Tabs,InputGroup,FormControl,Dropdown,DropdownButton,Form,ListGroup, ButtonToolbar,Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'

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
function postClick() {
  
}
//DUMMY data for taking in posts 
const array1 = ["[CSE 1284] How do I do a for loop?", "[CSE 1384] How to do link list?", "[CSE 2383] Merge sort vs Quick sort?","[CSE 2813] N={0,1,2,...} → ∀x:∃y:y=x+ 1 ?????","[CSE 4153] What's a socket?", "[CSE 3324] CSS help.."];
function iterate_list(){
  let total = array1.map(function(num){
    return (<Link className="list-group-item list-group-item-action" exact to='/post-template'>{num}</Link>)
  })
  return total;
}

{/* <Link className="list-group-item list-group-item-action" exact to='/'>Home</Link> */}

export default class LiveClassroom extends Component {


    render() {
        const number = 4;


        return (
            <>
  <div> 
      <center><h1>Discussion Board</h1></center>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Search">
    <Container>  <InputGroup className="mb-3">
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
</Container>
<Container>
  <ListGroup defaultActiveKey="#link1">
  {iterate_list()}
  </ListGroup>,
</Container>



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
