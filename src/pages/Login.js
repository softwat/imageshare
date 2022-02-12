import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Input from "../element/Input";
import styled from "styled-components";
import BlockWrap from "../components/BlockWrap";

const Login = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = React.useState({
    login_id: "",
    password: "",
  });

  // const [isLogin, setIsLogin] = React.useState(false);

  const onChange = (e) => {
    const input_id = e.target.id;
    const input_value = e.target.value;

    setFormInput({
      ...formInput,
      [input_id]: input_value,
    });
  };

  const loginClick = () => {
    //axios로 DB로 보낼 데이타
    //쿠키용
    dispatch(userActions.loginAction({ user: "coco" }));
  };

  return (
    <BlockWrap>
      <LoginStyle>
        <h2>Login</h2>
        <div>
          <span>login</span>
          <span>nonono</span>
        </div>
        <div className="input_form">
          <Input
            id="login_id"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
          />
          <Input
            id="password"
            type="password"
            placeholder="패스워드를 입력해주세요"
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
