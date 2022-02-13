import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Search } from "./index.js";
import { Logo, Button, Input } from "../elements/index.js";

import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const goProfile = () => props.history.push("/myprofile");

  return (
    <React.Fragment>
      <HeaderContainer>
        <Logo {...props} />
        <Search flex-grow="1" />
        {!user.is_login ? (
          <React.Fragment>
            <Button
              width="100px"
              text="로그인"
              _onClick={() => {
                props.history.push("/login");
              }}
            />
            <Button width="100px" text="회원가입" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button width="100px" text="프로필" _onClick={goProfile} />
            <Button
              width="100px"
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logOutAction({}));
              }}
            />
          </React.Fragment>
        )}
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

export default Header;
