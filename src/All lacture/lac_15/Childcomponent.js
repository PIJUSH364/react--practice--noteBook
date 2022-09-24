import React from "react";

function Childcomponent(props) {
  return (
    // always arrow function pass on when props pass as a method
    <button onClick={() => props.passalert("chilonedCompnt")}>
      click alert
    </button>
  );
}

export default Childcomponent;
