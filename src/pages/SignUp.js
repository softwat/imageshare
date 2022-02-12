import React from "react";
import { history } from "../redux/configureStore";
import { apis } from "../shared/api";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import Input from "../element/Input";
import BlockWrap from "../components/BlockWrap";
import { LoginStyle } from "./Login";
import { duration } from "moment";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const isOkUserId = useSelector((state) => state.user.user_id);
  const [checkId, setCheckId] = React.useState(false);
  const [formInput, setFormInput] = React.useState({});

  const signUpClick = () => {
    const { id, email, nickname, pwd, pwdCheck } = formInput;
    if (!id) {
      alert("아이디를 입력해주세요:)");
      return;
    } else if (checkId === false) {
      alert("아이디 중복확인 해주세요");
      return;
    } else if (!email) {
      alert("이메일을 입력해주세요:)");
      return;
    } else if (!nickname) {
      alert("닉네임을 입력해주세요:)");
      return;
    } else if (!pwd) {
      alert("비밀번호를 입력해주세요:)");
      return;
    } else if (!pwdCheck) {
      alert("비밀번를 다시한번 입력해주세요:)");
      return;
    } else if (pwd !== pwdCheck) {
      alert("비밀번호가 서로 같지 않습니다. :)");
      return;
    }
    //dispatch(userActions.signUpDB(formInput));

    apis
      .signup(id, email, pwd, nickname)
      .then(() => {
        console.log("login success");
        history.replace("/");
      })
      .catch((err) => {
        console.log("no login so sad");
        console.log(err);
      });
  };

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormInput({
      ...formInput,
      [id]: value,
    });
  };

  const idDupliCheck = () => {
    console.log(formInput.id);
    // dispatch(userActions.loginCheck(formInput.id));
    apis
      .loginCheck(formInput.id)
      .then(() => {
        console.log("good");
      })
      .catch(() => {
        console.log("not good");
      });
    setCheckId(isOkUserId);
  };
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
        <DupluBtn
          className="duplicate_btn"
          onClick={() => {
            idDupliCheck();
          }}>
          중복확인
        </DupluBtn>
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
