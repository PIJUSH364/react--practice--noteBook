import React from "react";
import { useState } from "react";
import useCounterHook from "./useCounterHook";

function CounterTwo() {
  //   const initialState = 0;
  //   const [counterTwo, setCounterTwo] = useState(initialState);

  //   const increment = () => {
  //     setCounterTwo(counterTwo + 1);
  //   };
  //   const decrement = () => {
  //     setCounterTwo(counterTwo - 1);
  //   };
  //   const reset = () => {
  //     setCounterTwo(initialState);
  //   };

  const [counter, increment, decrement, reset] = useCounterHook(10,5);
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={increment}>IncrementTwo</button>
      <button onClick={decrement}>DecrementTwo</button>
      <button onClick={reset}>ResetTwo</button>
    </div>
  );
}

export default CounterTwo;
