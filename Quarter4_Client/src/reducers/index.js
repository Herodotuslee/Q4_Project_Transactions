import { combineReducers } from "redux";
import ExpenseReducer from "./reducers_expense";

const rootReducer = combineReducers({
  expense: ExpenseReducer
});

export default rootReducer;
