import { useState } from "react";
import FormInput from "./FormInput";

const getInitialInputValues = (inputs) => {
  const state = {};
  inputs.forEach((input) => (state[input.name] = input.initialValue || ""));
  return state;
};

const Form = ({ inputs, onSubmit }) => {
  const initialState = getInitialInputValues(inputs);

  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
    setValues(initialState);
  };

  const resetChildren = () => {};

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

  return <form onSubmit={handleSubmit}>{renderedInputs}</form>;
};

export default Form;
