import React from "react";
import styled from "styled-components";
import Input from "../element/Input";
import BlockWrap from "../components/BlockWrap";
import { LoginStyle } from "./Login";
const SignUp = (props) => {
  const [formInput, setFormInput] = React.useState({
    login_id: "abc123",
    email: "",
    nickname: "",
    password: "",
  });

  const signUp = () => {
    console.log(formInput);
  };

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormInput({
      ...formInput,
      [id]: value,
    });
  };
  return (
    <BlockWrap>
      <LoginStyle>
        <h2>Signup</h2>
        <Input
          label="
        아이디"
          id="login_id"
          type="text"
          placeholder="아이디를 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="
        아이디"
          id="email"
          type="text"
          placeholder="이메일를 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="
        아이디"
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="
        아이디"
          id="password"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="
        아이디"
          id="re-password"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={onChange}
        />
        <button
          onClick={() => {
            signUp();
          }}>
          회원가입
        </button>
      </LoginStyle>
    </BlockWrap>
  );
};

export default SignUp;
