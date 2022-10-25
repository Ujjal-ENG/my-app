import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(new Date());

  const addClick = () => {
    setCount((prevState) => prevState + 1);
  };
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    setInterval(tick, 1000);
  });

  return (
    <>
      <p>Time: {date.toLocaleTimeString('bn-BD')}</p>
      <p></p>
      <button type="button" onClick={addClick}>
        Click
      </button>
    </>
  );
};

export default MyComponent;
