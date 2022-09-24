import React from "react";

function NameList() {
  const name = ["pijush", "pabitra", "puspa", "prodyut"];
  const listName = name.map((e, index) => {
    return <li key={index}>{e}</li>;
  });
  return (
    <>
      <div>list rendering</div>
      <ol>{listName}</ol>
    </>
  );
}

export default NameList;
