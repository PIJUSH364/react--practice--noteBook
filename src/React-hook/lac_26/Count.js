import React from "react";

function Count({ count, text }) {
  console.log("rendering ", text);
  return (
    <div>
      <h1>
        your {text} is :{count}
      </h1>
    </div>
  );
}

export default React.memo(Count);
