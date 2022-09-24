// // parent functon component

// import React from "react";
// import Childcomponent from "./Childcomponent";

// function Parentcomponent() {
//   const alertfunction = (child) => {
//     alert(`alert from ${child}`);
//   };
//   return (
//     <div>
//       <Childcomponent passalert={alertfunction} />
//     </div>
//   );
// }

// export default Parentcomponent;

// parent classcomponent
import React, { Component } from "react";
import Childcomponent from "./Childcomponent";

export class Parentcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "parent",
    };
    this.alertfunction = this.alertfunction.bind(this);
  }
  alertfunction(child) {
    alert(`this came  ${this.state.parentName} trough ${child}`);
  }
  render() {
    return (
      <div>
        <Childcomponent passalert={this.alertfunction} />
      </div>
    );
  }
}

export default Parentcomponent;
