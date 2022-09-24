import React from "react";
import { useContext } from "react";
import { CountContext } from "./Practicemain";

function ComponentF() {
  const countvalue = useContext(CountContext);
  return (
    <div>
      <h3>ComponentF:{countvalue.countState}</h3>
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
    </div>
  );
}

export default ComponentF;
