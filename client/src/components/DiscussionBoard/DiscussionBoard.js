import React, { Component} from 'react'
import { Tab,Tabs,InputGroup,FormControl,Dropdown,DropdownButton,Table} from 'react-bootstrap';

/*
function cat(){
    const number = 5;
    return number;
}

*/
export default class LiveClassroom extends Component {


    render() {
        const number = 4;


        return (
            <>
            {/* <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
            </ButtonGroup>
  */}
  <div> 
      <center><h1>Discussion Board</h1></center>
      
      <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Search by: "
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Top</Dropdown.Item>
      <Dropdown.Item href="#">Newest</Dropdown.Item>
      <Dropdown.Item href="#">By Class</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Return</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>

</div>

            <p>{number}</p>

            </>
        )
    }
}
