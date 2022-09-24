import React from "react";

import useTitleCounterHook from "./useTitleCounterHook";

function CounterOne() {
  const [increment, decrement, reset] = useTitleCounterHook();
  return (
    <div>
      <h5>CounterOne</h5>
      <button onClick={increment}>IncrementCouterOne</button>
      <button onClick={decrement}>DecrementCouterOne</button>
      <button onClick={reset}>resetCouterOne</button>
    </div>
  );
}

export default CounterOne;
