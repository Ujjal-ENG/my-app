import React from "react";
const Button = ({ handleClick, childrean }) => {
  
  return (
    <>
      <p>
        <button type="button" onClick={handleClick}>
          Increment{childrean}
        </button>
      </p>
    </>
  );
};

export default React.memo(Button);
