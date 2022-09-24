import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "somethig went worng",
        post: {},
      };

    default:
      return state;
  }
};
function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      DataFetchingTwo-
      <span>{state.loading ? "loading" : state.post.title}</span>
      <span>
        <h2>{state.error ? state.error : null}</h2>
      </span>
    </div>
  );
}

export default DataFetchingTwo;
