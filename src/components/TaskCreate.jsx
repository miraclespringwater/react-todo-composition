import { useState, Fragment } from "react";
import FormInput from "./FormInput";

const inputs = [
  {
    id: 1,
    name: "task",
    type: "text",
    placeholder: "I need to do this...",
    errorMessage: "Task cannot be empty.",
    label: "New Task",
    pattern: "^[A-Za-z0-9\\s]{1,}",
    required: true,
  },
];

const initialState = {
  task: "",
};

const TaskCreate = ({ onCreate }) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(values.task.trim());
    setValues(initialState);
  };

  const renderedInputs = inputs.map((input) => {
    return (
      <FormInput
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={handleChange}
      />
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>{renderedInputs}</form>
    </div>
  );
};

export default TaskCreate;
