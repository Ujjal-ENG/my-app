import React, { useReducer } from "react";
const initialState1 = 0;
const initialState2 = 5;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "increment1":
      return state + 5;
    case "decrement1":
      return state - 3;
    default:
      return state;
  }
};
const Counter3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState1);
  const [count1, dispatch1] = useReducer(reducer, initialState2);
  return (
    <>
      <div>
        <h1>Counter {count}</h1>
        <button type="button" onClick={() => dispatch("increment")}>
          Increment by one
        </button>
        <button type="button" onClick={() => dispatch("decrement")}>
          Decrement by one
        </button>
      </div>

      <div>
        <h1>Counter {count1}</h1>
        <button type="button" onClick={() => dispatch1("increment1")}>
          Increment by one
        </button>
        <button type="button" onClick={() => dispatch1("decrement1")}>
          Decrement by one
        </button>
      </div>
    </>
  );
};

export default Counter3;
