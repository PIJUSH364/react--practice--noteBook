import React from "react";

const Hellojsx = () => {
  // normal jsx
  //   return (
  //     <div className="dummyclass">
  //       <h1>Hello Pijush</h1>
  //     </div>
  //   );

  //   withOut jsx
  return React.createElement(
    "div",
    {
      id: "Hellojsx",
      className: "dummyClass",
    },
    React.createElement("h1", null, "hello pijush")
  );
};

export default Hellojsx;
