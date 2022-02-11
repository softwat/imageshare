import React from "react";

const Input = (props) => {
  const { id, htmlFor, type, placeholder, onChange } = props;
  return (
    <label htmlFor={htmlFor} onChange={onChange}>
      <input id={id} type={type} placeholder={placeholder} />
    </label>
  );
};

Input.defaultProps = {
  id: "",
  htmlFor: "",
  type: "text",
  placeholder: "입력해주세요",
  onChange: () => {},
};

export default Input;
