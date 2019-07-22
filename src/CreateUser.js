import React from 'react';
import './bootstrap.min.css';

import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardFooter,
  CardHeader,
  Toast,
  ToastHeader,
  ToastBody,
} from 'reactstrap';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.showToast
    });
  }


  render(){
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="6">
            <Form>
              <Card body>
                <CardHeader>
                  Create User
                </CardHeader>
               
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
                <CardFooter className="text-right">
                <Toast isOpen={this.state.showToast}>
                    <ToastHeader>
                      Success!
                    </ToastHeader>
                    <ToastBody>
                      The User was successfully created.
                    </ToastBody>
                  </Toast>
                  <Button>Cancel</Button>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateUser;
