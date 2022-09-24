import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";

function CustomHook1() {
  return (
    <div>
      <h2>CustomHook1</h2>
      <CounterOne />
      <CounterTwo/>
    </div>
  );
}

export default CustomHook1;
