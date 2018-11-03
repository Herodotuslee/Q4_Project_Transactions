import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class View extends Component {
  render() {
    if (this.props.expense) {
      return (
        <div>
          <Card>
            <CardBody>
              <CardTitle> {this.props.expense.business_name}</CardTitle>
              <CardSubtitle> {this.props.expense.type}</CardSubtitle>
              <CardText>${this.props.expense.amount}</CardText>
              <CardText>{this.props.expense.created_at}</CardText>
              <Button>Back</Button>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div>Loasing</div>;
    }
  }
}

const mapStateToProps = ({ expense }, props) => {
  return {
    expense: expense.find(
      expense => expense.id === Number(props.match.params.id)
    )
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(View)
);
