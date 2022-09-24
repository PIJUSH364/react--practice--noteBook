import React, { Component } from "react";

export class Bindmethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello!",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      message: "Hi PIJUSH!",
    });
    console.log("yy");
  }

  //   way no:4
  //   handleClick = () => {
  //     this.setState({
  //       message: "Hi PIJUSH!",
  //     });
  //     console.log("yy");
  //   };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.handleClick.bind(this)}>Click me</button> */}
        {/* <button onClick={() => this.handleClick()}>Click me</button> */}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Bindmethod;
