import React from 'react';
import './App.css';
import './bootstrap.min.css';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  CardColumns,
  Card,
  Toast,
  Col
} from 'reactstrap';

function CreateUser() {
  return (
    <div className="App">
      <div>
        <Row>
          <Col sm="6">
            <Card body>
              <Form>
                <FormGroup>
                  <Input name="username" id="username" placeholder="Username *" required="true" />
                  <Input type="email" name="email" id="emailAddress" placeholder="Email Address *" required="true" />
                  <Input name="phoneNumber" id="phoneNumber" placeholder="Phone Number *" required="true" />
                  <Input name="firstName" id="firstName" placeholder="First Name *" required="true" />
                  <Input name="lastName" id="lastName" placeholder="Last Name *" required="true" />
                  <Input name="streetAddress" id="streetAddress" placeholder="Street Address *" required="true" />
                  <Input name="unitNumber" id="unitNumber" placeholder="Unit Number" />
                  <Input name="city" id="city" placeholder="City *" required="true" />
                  <Input name="state" id="state" placeholder="State *" required="true" />
                  <Input name="zip" id="zip" placeholder="Zip *" required="true" />
                </FormGroup>
                <Button>Cancel</Button>
                <Button>Submit</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CreateUser;
