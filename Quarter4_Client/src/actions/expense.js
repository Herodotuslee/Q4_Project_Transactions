import axios from "axios";

export const FETCH_EXPENSE_SUCCESS = "FETCH_EXPENSE_SUCCES";
export const FETCH_EXPENSE_FAILED = "FETCH_EXPENSE_FAILED";
export const DELETE_EXPENSE_SUCCESS = "DELETE_EXPENSE_SUCCESS";
export const DELETE_EXPENSE_FAILED = "DELETE_EXPENSE_SUCCESS";
export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_FAILED = "ADD_EXPENSE_FAILED";

export const fetchExpense = () => dispatch => {
  axios
    .get("http://localhost:8000/transactions")
    .then(response => {
      return dispatch({
        type: FETCH_EXPENSE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: FETCH_EXPENSE_FAILED, payload: err }));
};

export const addExpense = expense => dispatch => {
  return axios
    .post("http://localhost:8000/transactions", expense)
    .then(response => {
      dispatch({
        type: ADD_EXPENSE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_EXPENSE_FAILED,
        payload: err
      })
    );
};

export const deleteExpense = id => dispatch => {
  axios
    .delete(`http://localhost:8000/transactions/${id}`)
    .then(response => dispatch({ type: DELETE_EXPENSE_SUCCESS, payload: id }))
    .catch(err => dispatch({ type: DELETE_EXPENSE_FAILED, payload: err }));
};
