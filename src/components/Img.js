import React from "react";
import styled from "styled-components";
import { Button } from "../elements/index";
import { ImgInfo, TagList } from "./index";

const Img = (props) => {
  return (
    <React.Fragment>
      <ImgContainer>
        img
        <Button is_abs text="하트"></Button>
        <ImgInfo />
      </ImgContainer>
    </React.Fragment>
  );
};

const ImgContainer = styled.div`
  position: relative;
  border: 1px solid black;
  width: 200px;
  height: 400px;
  margin: 10px;
`;

export default Img;
