import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./compontents/Login";
import NavBarList from "./compontents/NavBarList";
import ShowAll from "./compontents/ShowAll";
import EditPage from "./compontents/Edit";
import AddPage from "./compontents/AddNew";
import View from "./compontents/View";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBarList />
          <header className="App-header" />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/showAll" component={ShowAll} />
            <Route exact path="/edit/:id" component={EditPage} />
            <Route exact path="/add" component={AddPage} />
            <Route exact path="/view/:id" component={View} />
            <Route exact path="/addExpense" component={AddPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
