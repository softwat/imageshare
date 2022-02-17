import React from "react";
import styled from "styled-components";
import { ImgList } from "../components/index.js";
import { getCookie } from "../shared/cookie.js";
import { history } from "../redux/configureStore.js";
const Main = (props) => {
  if (!getCookie("token")) {
    history.replace("/login");
  }
  return (
    <React.Fragment>
      <MainContainer>
        <ImgList {...props} />
      </MainContainer>
    </React.Fragment>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
`;

export default Main;
