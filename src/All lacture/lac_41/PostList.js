import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      errorMsg: " ",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Error retriving data",
        });
      });
  }

  render() {
    // console.log(this.state.posts);
    // distructuring the posts from state
    const { posts } = this.state;
    // if posts length value greterthen 0("zero") then only map invoke otherwise set to null in listofTitle
    const listOfTitle = posts.length
      ? posts.map((e, index) => {
          return <li key={index}>{e.email}</li>;
        })
      : this.state.errorMsg;
    console.log(listOfTitle);
    return (
      <div>
        <h1>ListOf Post</h1> <ol>{listOfTitle}</ol>
      </div>
    );
  }
}

export default PostList;

// ===============================
// ---------functinal component-----------
// ==============================

// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";

// function PostList() {
//   const [posts, setPost] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments?postId=1")
//       .then((Response) => {
//         console.log(Response);
//         setPost(Response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   console.log(posts);
//   const listOfTitle = posts.map((e, index) => {
//     return <li key={index}>{e.email}</li>;
//   });
//   return (
//     <div>
//       <h1>istOfTitle</h1>
//       <ol>{listOfTitle}</ol>
//     </div>
//   );
// }

// export default PostList;
