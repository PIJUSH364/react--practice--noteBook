import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import CustomHook2 from "./customHook2/CustomHook2";
import CustomHook1 from "./custom_hook/CustomHook1";

export const CountContext = createContext();
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
function Practicemain() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CountContext.Provider
        value={{
          countState: count,
          countDispatch: dispatch,
        }}
      >
        <h1>{count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
      {/* custom hook1 */}
      <CustomHook1 />
      {/* custom hook2 */}
      <CustomHook2 />
      <h3>__________end____________</h3>
    </div>
  );
}

export default Practicemain;
