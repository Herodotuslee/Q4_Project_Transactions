import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addExpense } from "../actions/expense";
class EditPage extends Component {
  state = {
    id: "",
    amount: "",
    business_name: "",
    type: ""
  };
  componentDidMount() {
    this.setState({ ...this.props.expense });
  }

  componentDidUpdate(prevProps) {
    if (this.props.expense && this.state.id !== this.props.expense.id) {
      this.setState({ ...this.props.expense });
    }
  }

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.addExpense(this.state).then(() => {
      this.setState({
        business_name: "",
        amount: 0,
        type: ""
      });
    });
    this.props.history.push("/showall");
  };

  render() {
    return (
      <Container>
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
const mapStateToProps = ({ expense }, props) => {
  return {
    expense: expense.find(
      expense => expense.id === Number(props.match.params.id)
    )
  };
};

const mapDispatchToProps = {
  addExpense
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPage)
);
