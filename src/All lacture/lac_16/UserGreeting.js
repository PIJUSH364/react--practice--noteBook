import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    
    // =====================================
    // way four :help of and(&&) operator rendering
    // ====================================
    return this.state.isLoggedIn && <div>Welcome pijush </div>;

    // =====================================
    // way three :help of tarnory operator conditional rendering
    // ======================================

    // return this.state.isLoggedIn ? (
    //   <div>Welcome pijush </div>
    // ) : (
    //   <div>Welcome guest </div>
    // );

    // =====================================
    // way two :help of variable rendering
    // ======================================

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome pijush </div>;
    // } else {
    //   message = <div>Welcome guest </div>;
    // }
    // return <div>{message}</div>;

    // =====================================
    // way one:help of if else
    // ======================================

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome pijush </div>;
    // } else {
    //   return <div>Welcome guest </div>;
    // }
  }
}

export default UserGreeting;
