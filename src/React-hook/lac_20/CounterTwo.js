import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secoundCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment5":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "decrement5":
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>First_counter:{count.firstCounter}</h3>
      <h3>Secound_counter:{count.secoundCounter}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment-5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement-5
      </button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment5", value: 5 });
          }}
        >
          Increment-counter-2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement5", value: 5 });
          }}
        >
          Decrement-counter-2
        </button>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "reset", value: 1 });
        }}
      >
        reset
      </button>
    </div>
  );
}

export default CounterTwo;
