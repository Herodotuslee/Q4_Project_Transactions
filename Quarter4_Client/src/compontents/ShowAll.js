import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import ExpenseItem from "./ExpenseItem";

class ShowAllItem extends Component {
  renderList() {
    return this.props.expense.map(item => {
      return (
        <ExpenseItem key={item.id} expense={item} className="list-group" />
      );
    });
  }
  render() {
    return (
      <Container>
        <Button color="primary">
          <Link to="/addExpense">Add</Link>
        </Button>
        <ListGroup>{this.renderList()}</ListGroup>
      </Container>
    );
  }
}
const mapStateToProps = ({ expense }) => {
  return {
    expense
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowAllItem);
