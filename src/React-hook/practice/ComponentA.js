import React from "react";
import { useContext } from "react";
import { CountContext } from "./Practicemain";

function ComponentA() {
  const countvalue = useContext(CountContext);
  return (
    <>
      <div>ComponentA : {countvalue.countState}</div>
      <section>
        <button
          onClick={() => {
            countvalue.countDispatch("increment");
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            countvalue.countDispatch("decrement");
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            countvalue.countDispatch("reset");
          }}
        >
          reset
        </button>
      </section>
    </>
  );
}

export default ComponentA;
