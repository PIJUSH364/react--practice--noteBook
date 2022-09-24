import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: " ",
      topic: "React",
    };
  }
  handaleUserName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handleTopic = (e) => {
    console.log(this.state.topic);
    this.setState({
      topic: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `${this.state.username} chouse ${this.state.topic}to ${this.state.comments}`
    );
  };
  render() {
    return (
      <div>
        Form component
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handaleUserName}
            />
          </div>
          <div>
            <label>comments</label>
            <textarea
              cols="20"
              rows="3"
              value={this.state.comments}
              onChange={this.handleComments}
            ></textarea>
          </div>
          <div>
            <label>topic</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
