import { Fragment, useState } from "react";
const FormInput = ({
  label,
  errorMessage,
  onChange,
  id,
  initialValue,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <Fragment>
      <input
        {...rest}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </Fragment>
  );
};

export default FormInput;
