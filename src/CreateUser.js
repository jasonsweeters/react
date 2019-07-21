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
          <Input type="email" name="email" id="username" placeholder="Username *" required="true"/>
          <Input type="email" name="email" id="emailAddress" placeholder="Email Address *" required="true"/>
          <Input type="email" name="email" id="phoneNumber" placeholder="Phone Number *" required="true"/>
          <Input type="email" name="email" id="firstName" placeholder="First Name *" required="true"/>
          <Input type="email" name="email" id="lastName" placeholder="Last Name *" required="true"/>
          <Input type="email" name="email" id="streetAddress" placeholder="Street Address *" required="true"/>
          <Input type="email" name="email" id="unitNumber" placeholder="Unit Number"/>
          <Input type="email" name="email" id="city" placeholder="City *" required="true"/>
          <Input type="email" name="email" id="state" placeholder="State *" required="true"/>
          <Input type="email" name="email" id="zip" placeholder="Zip *" required="true"/>
        </FormGroup>
        <Button>Cancel</Button>
        <Button>Submit</Button>
      </Form>
   </div>
    </div>
  );
}

export default CreateUser;
