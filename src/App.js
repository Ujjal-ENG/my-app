import React, { useCallback, useMemo, useState } from "react";
import Button from "./Components/Button";
import ShowCount from "./Components/ShowCount";
import Title from "./Components/Title";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const handleEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 10000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{handleEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementByOne}></Button>
      <hr />
      <hr />
      <hr />

      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </>
  );
};

export default App;
