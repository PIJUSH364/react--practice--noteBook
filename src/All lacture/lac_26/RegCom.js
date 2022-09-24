import React, { Component } from "react";

export class RegCom extends Component {
  render() {
    console.log('***from reg componet***');
    return (
      <div>
        <h1>regular component : {this.props.name}</h1>
      </div>
    );
  }
}

export default RegCom;
