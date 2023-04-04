import { useState } from "react";

const TaskCreate = ({ onCreate }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={input} />
    </form>
  );
};

export default TaskCreate;
