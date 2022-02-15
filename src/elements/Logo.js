import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Logo = (props) => {
  const { history } = props;
  return (
    <React.Fragment>
      <LogoContainer onClick={() => history.push("/")}>
        Image Share
      </LogoContainer>
    </React.Fragment>
  );
};

const LogoContainer = styled.div`
  width: 150px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  font-family: "Syne Tactile", cursive;
`;

export default Logo;
