import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import { ImgList } from "../components/index.js";
const Main = (props) => {
  return (
    <React.Fragment>
      <MainContainer>
        <ImgList {...props} />
      </MainContainer>

      <ToHome
        onClick={() => {
          history.push("/create");
        }}>
        작성
      </ToHome>
    </React.Fragment>
  );
};

const MainContainer = styled.div`
  height: 100vh;
`;

const ToHome = styled.span`
  --btnsize: 60px;
  position: fixed;
  bottom: 100px;
  right: 100px;
  display: inline-block;
  width: var(--btnsize);
  height: var(--btnsize);
  line-height: var(--btnsize);
  text-align: center;
  color: #eee;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  transition: all 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default Main;
