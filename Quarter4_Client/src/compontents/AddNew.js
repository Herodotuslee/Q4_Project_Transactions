import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addExpense } from "../actions/expense";

class AddPage extends Component {
  state = {
    type: "",
    business_name: "",
    amount: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addExpense(this.state).then(() => {
      this.setState({
        business_name: "",
        amount: 0,
        type: ""
      });
    });
  };

  handleChangeBusiness = e => {
    this.setState({
      business_name: e.target.value
    });
  };

  handleChangeAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleChangeType = e => {
    this.setState({
      type: e.target.value
    });
  };

  render() {
    return (
      <Container>
        <p>Add Page</p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="businessName">Business</Label>
            <Input
              type="text"
              name="bueiness_name"
              id="businessName"
              placeholder="with a placeholder"
              onChange={this.handleChangeBusiness}
              value={this.state.business_name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="businessTyp">Business Type</Label>
            <Input
              type="text"
              name="type"
              id="businessType"
              placeholder="with a placeholder"
              onChange={this.handleChangeType}
              value={this.state.type}
            />
          </FormGroup>
          <FormGroup>
            <Label for="amount">Amount</Label>
            <Input
              type="number"
              name="amount"
              id="amount"
              placeholder="with a placeholder"
              onChange={this.handleChangeAmount}
              value={this.state.amount}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  addExpense
};

export default connect(
  null,
  mapDispatchToProps
)(AddPage);
