import React from "react";
import styled from "styled-components";
import Input from "../element/Input";

const SignUp = (props) => {
  return (
    <SignUpStyle>
      <div>회원가입</div>
      <label htmlFor="id">
        <Input id="id" />
      </label>
      <label htmlFor="email">
        <Input id="email" />
      </label>
      <label htmlFor="nickname">
        <Input id="nickname" />
      </label>
      <label htmlFor="password">
        <Input id="password" />
      </label>
      <label htmlFor="re-password">
        <Input id="re-password" />
      </label>
      <button></button>
    </SignUpStyle>
  );
};
const SignUpStyle = styled.div`
  label {
    display: block;
  }
`;
SignUp.defatulProps = {};

export default SignUp;
