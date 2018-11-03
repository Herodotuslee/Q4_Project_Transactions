import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalLogin: false, modal1: false };
  }

  toggleLogin = () => {
    this.setState({ modalLogin: !this.state.modalLogin });
  };

  toggleSignup = () => {
    this.setState({ modalSignup: !this.state.modalSignup });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addExpense(this.state).then(() => {
      this.setState({
        money: "",
        content: ""
      });
    });
  };
  login = todo => {
    axios.post(`http://localhost:8000/users/login`, todo).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        {/* LoginForm */}
        <Button color="danger" onClick={this.toggleLogin}>
          {this.props.buttonLabel}
          Login
        </Button>

        <Modal
          isOpen={this.state.modalLogin}
          toggle={this.toggleLogin}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLogin}>
              Login
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleLogin}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* SignUpForm */}
        <Button color="danger" onClick={this.toggleSignup}>
          {this.props.buttonLabel}
          Sign Up
        </Button>
        <Modal
          isOpen={this.state.modalSignup}
          toggle={this.toggleSignup}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleSignup}>SIGN UP</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleSignup}>
              Login
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleSignup}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
