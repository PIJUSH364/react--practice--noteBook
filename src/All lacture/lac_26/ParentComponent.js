import React, { Component } from "react";
import MemoCom from "./lac_27/MemoCom";
import PureCom from "./PureCom";
import RegCom from "./RegCom";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "pijush",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "pijush",
      });
    }, 2000);
  }
  render() {
    console.log("***from parent componet***");
    return (
      <div>
        <h1>ParentComponent</h1>
        <MemoCom name={this.state.name} />
        {/* <RegCom name={this.state.name} />
        <PureCom name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComponent;
