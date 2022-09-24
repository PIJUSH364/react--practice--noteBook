import React, { useEffect, useState } from "react";

function useTitleCounterHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rendring count");
    document.title = `count : ${count}`;
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return [increment, decrement, reset];
}

export default useTitleCounterHook;
