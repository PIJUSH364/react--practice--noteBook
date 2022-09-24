// import { useContext } from "react";
// import { CountContext } from "./Main";

export const initialState = 0;
export const reducer = (state, action) => {
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
// export const countContext = useContext(CountContext);
