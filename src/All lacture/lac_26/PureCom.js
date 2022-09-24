import React, { PureComponent } from "react";
// import React, { Component } from 'react'--->component instent of purecomponet use
export class PureCom extends PureComponent {
  render() {
    console.log('***from pure componet***');
    return (
      <div>
        <h1>PureCom : {this.props.name}</h1>
      </div>
    );
  }
}

export default PureCom;
