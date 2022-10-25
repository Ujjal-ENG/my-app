import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState();
  const [warning, setWarning] = useState();

  const handleChange = (e) => {
    const input = e.target.value;
    const warning = input.includes('.js') ? 'You need Javascript skills to complete the task. Do you have it?' : null;
    setTodo(input);
    setWarning(warning)
  }

  return (
    <>
      <p>{todo}</p>
      <p>
        <textarea
          name="todo"
          id=""
          cols="30"
          rows="3"
          value={todo}
          onChange={handleChange}
        ></textarea>
      </p>
      <hr />
      <h2>{warning || "Good Choice!!"}</h2>
    </>
  );
};

export default Todo;
