import React, { useReducer } from "react";

const inititalState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, inititalState);
  return (
    <>
      <div>Count - {count}</div>
      <br />
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <br />
      <br />
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
