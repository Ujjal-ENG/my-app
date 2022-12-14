import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };

    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "There was a Problem fetching!!",
      };
    default:
      return state;
  }
};
const GetPost2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/11")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", result: data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <>
      {state.loading ? "Loading...." : state.post.title}
      {state.error || null}
    </>
  );
};

export default GetPost2;
