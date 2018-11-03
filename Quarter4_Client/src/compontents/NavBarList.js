import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class NavBarList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>
              MAIN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/showall">ALL Transactions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">LogIn</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavBarList;
