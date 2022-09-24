import React from "react";

function MemoCom({ name }) {
  console.log("rendering memo component");
  return (
    <div>
      <h1> memo componet {name}</h1>
    </div>
  );
}

export default React.memo(MemoCom);

