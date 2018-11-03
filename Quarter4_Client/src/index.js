import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "./reducers/index";
import "bootstrap/dist/css/bootstrap.min.css";
import thunkMiddleware from "redux-thunk";

import { fetchExpense } from "./actions/expense";

const middleware = [logger, thunkMiddleware];
const store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(fetchExpense());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
