import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Button, ListGroupItem, NavItem, NavLink } from "reactstrap";
import { deleteExpense } from "../actions/expense";
import View from "./View";

class ExpenseItem extends Component {
  render() {
    return (
      <div>
        <ListGroupItem>
          {this.props.expense.business_name}

          <NavLink href={`/view/${this.props.expense.id}`}>View</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          ${this.props.expense.amount}{" "}
          <Button
            color="danger"
            onClick={() => this.props.deleteExpense(this.props.expense.id)}
          >
            Delete
          </Button>
          <Link
            style={{ marginLeft: `1em` }}
            className="btn btn-secondary"
            to={`/edit/${this.props.expense.id}`}
          >
            EDIT
          </Link>
        </ListGroupItem>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteExpense }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(ExpenseItem);
