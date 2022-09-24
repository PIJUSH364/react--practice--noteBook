import React from "react";

import useTitleCounterHook from "./useTitleCounterHook";

function CounterTwo() {


  const [increment,decrement,reset] = useTitleCounterHook();
  return (
    <div>
      <h5>CounterTwo</h5>
      <button onClick={increment}>IncrementCounterTwo</button>
      <button onClick={decrement}>DecrementCounterTwo</button>
      <button onClick={reset}>resetCounterTwo</button>
    </div>
  );
}

export default CounterTwo;
