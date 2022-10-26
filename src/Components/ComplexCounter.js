import React, { useReducer } from "react";

const inititalState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };

    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, inititalState);
  return (
    <>
      <div>
        <div>Count - {count.counter}</div>
        <br />
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment by 1
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 2,
            })
          }
        >
          Decrement by 2
        </button>
      </div>

      <div>
        <div>Count - {count.counter2}</div>
        <br />
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment2",
              value: 1,
            })
          }
        >
          Increment2 by 1 NUmber
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 2,
            })
          }
        >
          Decrement2 by 2
        </button>
      </div>
    </>
  );
};

export default ComplexCounter;
