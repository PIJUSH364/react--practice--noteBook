import axios from "axios";
import React, { Component } from "react";
class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      title: " ",
      body: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandeler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://jsonplaceholder.typicode.com/comments?postId=1",
        this.state
      )
      .then((response) => {
        console.log(response);
      })
      .catch((Error) => {
        console.log(Error);
      });
    this.setState({
      userId: "",
      title: " ",
      body: "",
    });
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandeler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
