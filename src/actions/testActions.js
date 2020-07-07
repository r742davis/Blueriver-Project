import {
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "../actions/action-types";
import axios from "axios";

const URL= "https://jsonplaceholder.typicode.com/todos/1";

// const URL = process.env.NODE_ENV === "production" 
// ? "https://bearmugclub.herokuapp.com/api/API/"
// : "http://localhost:5000/api/beers/";

export const fetchAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchAPIBegin());
    return fetch(URL)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchAPISuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchAPIFailure(error)));
  };
};

export const fetchAPIBegin = () => ({
  type: FETCH_API_BEGIN
});

export const fetchAPISuccess = data => ({
  type: FETCH_API_SUCCESS,
  payload: data
});

export const fetchAPIFailure = error => ({
  type: FETCH_API_FAILURE,
  payload: { error }
});
