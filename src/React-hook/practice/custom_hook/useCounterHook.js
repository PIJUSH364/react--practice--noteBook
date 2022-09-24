import { useState } from "react";
function useCounterHook(initialCount, value) {
  const [counter, setCounter] = useState(initialCount, value);

  const increment = () => {
    setCounter((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCounter((prevCount) => prevCount + value);
  };
  const reset = () => {
    setCounter(initialCount);
  };
  return [counter, increment, decrement, reset];
}

export default useCounterHook;
