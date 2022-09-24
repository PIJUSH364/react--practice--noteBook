import React from "react";
import { useContext } from "react";
import { ChanellContext, UserContext } from "../HookMainComponent";
import ComponentF from "./ComponentF";
// lac_17 useContext
function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChanellContext);
  return (
    <div>
      <h1>
        {user}---
        {channel}
      </h1>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
