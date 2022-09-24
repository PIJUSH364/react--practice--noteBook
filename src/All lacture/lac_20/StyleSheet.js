import React from "react";
import "./myStyle.css";
function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <>
      <h1 className={className}> StyleSheet</h1>
    </>
  );
}

export default StyleSheet;
