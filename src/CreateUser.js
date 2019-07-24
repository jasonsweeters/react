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
import store from './store/configureStore'


class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      toastToggle: true,
      toastHeader: "",
      toastMessage: ""
    };

    this.showToast = this.showToast.bind(this);
    this.resetForm = this.resetForm.bind(this);

  }

  showToast = e => {
    e.preventDefault();
    store.dispatch({type: "TOAST_MESSAGE_TOGGLE"});

    if(store.getState().toastToggle){
      this.setState({
        toastHeader: "Success!",
        toastMessage: "New User sucessfully created."
      });
    }
    else{
      this.setState({
        toastHeader: "Faliure",
        toastMessage: "Unable to create new User."
      });
    }
  }

  resetForm() {
    store.dispatch({type: "RESET"});
    this.setState({
      toastHeader: "",
      toastMessage: ""
    });
    document.getElementById('createUserForm').reset();

  }

  render(){
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="6">
            <Form id="createUserForm"  onSubmit={this.showToast}>
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
                <Toast isOpen={store.getState().showToast}>
                    <ToastHeader>
                      {this.state.toastHeader}
                    </ToastHeader>
                    <ToastBody>
                      {this.state.toastMessage}
                    </ToastBody>
                  </Toast>
                  <Button onClick={this.resetForm}>Cancel</Button>
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
