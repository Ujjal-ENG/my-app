import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount((prevState) => prevState + 1);
      i = i + 1;
    }
  };
  return (
    <>
      {count}
      <p>
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Add Counter
        </button>
      </p>
      <button type="button" onClick={addFive}>
        Add Five
      </button>
    </>
  );
};

export default Counter;
