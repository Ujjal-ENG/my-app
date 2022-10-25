import React, { useState } from "react";
import MyComponent from "./Components/MyComponent";

const App = () => {
  const [show, setShow] = useState();
  return (
    <>
      <div>{show && <MyComponent />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide Post" : "Show Post"}
        </button>
      </p>
    </>
  );
};

export default App;
