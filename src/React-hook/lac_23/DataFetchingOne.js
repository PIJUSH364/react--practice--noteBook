import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPosts] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setError("");
        setPosts(res.data);
      })
      .catch((error) => {
        setError("somethig went worng!");
        setLoading(false);
        setPosts({});
      });
  }, []);
  return (
    <div>
      DataFetchingOne- <span>{loading ? "loading" : post.title}</span>
      <span>
        <h2>{error ? error : null}</h2>
      </span>
    </div>
  );
}

export default DataFetchingOne;
