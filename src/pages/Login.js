import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Input from "../element/Input";
import styled from "styled-components";
import BlockWrap from "../components/BlockWrap";

const Login = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = React.useState({
    id: "",
    pwd: "",
  });

  // const [isLogin, setIsLogin] = React.useState(false);
  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormInput({
      ...formInput,
      [id]: value,
    });
  };

  const loginClick = () => {
    //axios로 DB로 보낼 데이타
    //쿠키용
    console.log(formInput);
    dispatch(userActions.loginAction(formInput.id));
  };

  return (
    <BlockWrap>
      <LoginStyle>
        <h2>Login</h2>
        <div className="input_form">
          <Input
            id="id"
            type="text"
            label="아이디"
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
          />
          <Input
            id="pwd"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChange}
          />
        </div>
        <button
          onClick={() => {
            loginClick();
          }}>
          로그인
        </button>
      </LoginStyle>
    </BlockWrap>
  );
};

export const LoginStyle = styled.div`
  width: 70%;

  .input_form {
    width: 100%;
  }

  button {
    width: 100%;
    margin-top: 20px;
    padding: 13px;
    background-color: red;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
`;

export default Login;
