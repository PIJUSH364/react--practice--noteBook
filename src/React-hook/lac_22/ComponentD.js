import React from "react";
import { useContext } from "react";
import { CountContext } from "./Main";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentD
      <div>
        <button
          onClick={() => {
            countContext.countDispatch("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            countContext.countDispatch("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            countContext.countDispatch("reset");
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default ComponentD;
