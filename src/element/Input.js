import React from "react";
import styled from "styled-components";
const Input = (props) => {
  const { id, type, placeholder, onChange, label } = props;
  return (
    <InputStyle>
      <label htmlFor={id} onChange={onChange}>
        {label}
        <input id={id} type={type} placeholder={placeholder} />
      </label>
    </InputStyle>
  );
};

Input.defaultProps = {
  id: "",
  label: "",
  htmlFor: "",
  type: "text",
  placeholder: "입력해주세요",
  onChange: () => {},
};

const InputStyle = styled.div`
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: solid 1px #ccc;
  }
`;
export default Input;
