import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Logo = (props) => {
  const { history } = props;
  return (
    <React.Fragment>
      <LogoContainer onClick={() => history.push("/")}>Pic!</LogoContainer>
    </React.Fragment>
  );
};

const LogoContainer = styled.div`
  width: 150px;
  text-align: center;
  cursor: pointer;
  font-family: "Lobster", cursive;
  font-family: "Permanent Marker", cursive;
  font-size: 30px;
  color: #ff54b0;
}
`;

export default Logo;
