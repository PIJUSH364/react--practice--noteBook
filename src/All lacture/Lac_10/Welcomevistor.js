import React, { useState } from "react";

function Welcomevistor() {
  const [subscribe, setSubscribe] = useState(" ");
  const handleSubscribe = () => {
    // alert(subscribe);
    setSubscribe("thank you for subscribe");
  };
  return (
    <div>
      <h1>Welcome vistor</h1>
      <h3>{subscribe}</h3>
      <button onClick={handleSubscribe}>subscribe</button>
    </div>
  );
}

export default Welcomevistor;
