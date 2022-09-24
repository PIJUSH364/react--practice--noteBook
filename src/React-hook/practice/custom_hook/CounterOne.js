import React from "react";
import { useState } from "react";
import useCounterHook from "./useCounterHook";

function CounterOne() {
  const [counter, increment, decrement, reset] = useCounterHook(3, 1);
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={increment}>IncrementOne</button>
      <button onClick={decrement}>DecrementOne</button>
      <button onClick={reset}>ResetOne</button>
    </div>
  );
}

export default CounterOne;
