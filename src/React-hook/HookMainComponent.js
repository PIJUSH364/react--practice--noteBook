import React from "react";
import ComponentC from "./lac_16/ComponentC";
import CounterOne from "./lac_19/CounterOne";
import CounterTwo from "./lac_20/CounterTwo";
import CounterThree from "./lac_21/CounterThree";
import Main from "./lac_22/Main";
import DataFetchingOne from "./lac_23/DataFetchingOne";
import DataFetchingTwo from "./lac_24/DataFetchingTwo";
import MainCallback from "./lac_26/MainCallback";
import MainMemo from "./lac_27/MainMemo";
import Practicemain from "./practice/Practicemain";
export const UserContext = React.createContext();
export const ChanellContext = React.createContext();

function HookMainComponent() {
  return (
    <>
      <h1>Introduce_Hook</h1>
      <div>
        {/* useMemo hook */}
        <MainMemo />
        {/* useCallback hook lac no:26 */}
        <MainCallback />
        {/* practice component */}
        <Practicemain />
        {/* fetching data with useReducer part-2 */}
        <DataFetchingTwo />
        {/* fetching data with useReducer part-1 */}
        <DataFetchingOne />
        {/* useReducer with useContext */}
        <Main />
        {/* multiple usereducer */}
        <CounterThree />
        {/* usereducer(complex state and action) */}
        <CounterTwo />
        {/* usereducer(simple state and action) */}
        <CounterOne />
        {/* useContextHook part-2 */}
        <UserContext.Provider value={"pijush ray mondal"}>
          <ChanellContext.Provider value={"codeEvolution"}>
            <ComponentC />
          </ChanellContext.Provider>
        </UserContext.Provider>
      </div>
      <h1>-------------End_Hook------------</h1>
    </>
  );
}

export default HookMainComponent;
