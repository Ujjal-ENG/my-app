import React, { useEffect, useRef } from "react";
import Input from "./Input";

const Form = () => {
  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <p>
        <Input ref={inputRef} type="text" placeholder="Enter Something" />
      </p>
    </>
  );
};

export default Form;
