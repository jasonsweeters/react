import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

import { 
  Button, 
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function CreateUser() {
  return (
    <div className="App">
   <div>
   <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
   </div>
    </div>
  );
}

export default CreateUser;
