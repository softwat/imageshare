import React from "react";
import { sha256 } from "sha256";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { apis } from "../shared/api";
import { actionCreators as userActions } from "../redux/modules/user";

import styled from "styled-components";
import { LoginStyle } from "./Login";
import Input from "../element/Input";
import BlockWrap from "../components/BlockWrap";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const isOkUserId = useSelector((state) => state.user.user_id);
  const [formInput, setFormInput] = React.useState({});

  const signUpClick = () => {
    const { id, email, nickname, pwd, pwdCheck } = formInput;

    if (!id || !email || !nickname || !pwd || !pwdCheck) {
      alert("빈 칸을 모두 채워 주세요 :)");
    } else if (pwd !== pwdCheck) {
      alert("비밀번호가 서로 같지 않습니다. :)");
      return;
    } else {
      dispatch(userActions.signUpApi(formInput));
    }
  };

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormInput({
      ...formInput,
      [id]: value,
    });
  };

  // const idDupliCheck = () => {
  //   if (!formInput.id) {
  //     alert("아이디를 먼저 입력해주세요");
  //     return;
  //   } else {
  //     dispatch(userActions.loginCheckApi(formInput.id));
  //   }
  // };
  return (
    <BlockWrap>
      <LoginStyle>
        <h2>Signup</h2>
        <Input
          label="아이디"
          id="id"
          type="text"
          placeholder="아이디를 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="이메일"
          id="email"
          type="text"
          placeholder="이메일를 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="닉네임"
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="패스워드"
          id="pwd"
          type="text"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
        />
        <Input
          label="패스워드 재입력"
          id="pwdCheck"
          type="text"
          placeholder="비밀번호를 재입력해주세요"
          onChange={onChange}
        />
        <button
          onClick={() => {
            signUpClick();
          }}>
          회원가입
        </button>
      </LoginStyle>
    </BlockWrap>
  );
};
const DupluBtn = styled.span`
  display: flex;
  justify-content: center;
  width: 80px;
  margin-left: auto;
  padding: 10px;
  color: #fff;
  background-color: gray;
  font-size: 16px;
  cursor: pointer;
`;

export default SignUp;
