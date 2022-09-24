import React from "react";
import { ChanellContext, UserContext } from "../HookMainComponent";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChanellContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    user context value : {user}, {channel}and channel context
                    value :{channel}
                  </div>
                );
              }}
            </ChanellContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
