import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <h2>counter-Three</h2>
      <div>
        <h3>count :{count}</h3>
        <button
          onClick={() => {
            dispatch("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          reset
        </button>
      </div>
      <div>
        <div>
          <h3>Count Two: {countTwo}</h3>
          <button
            onClick={() => {
              dispatchTwo("increment");
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatchTwo("decrement");
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              dispatchTwo("reset");
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterThree;
