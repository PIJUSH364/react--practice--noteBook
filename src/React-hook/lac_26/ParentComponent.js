import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  //   usecallback take two argument first is arrow functon and secound is empty dependencies
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  );
}

export default ParentComponent;
