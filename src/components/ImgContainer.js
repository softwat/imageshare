import React from "react";
import styled from "styled-components";
import { Button, Permit } from "../elements/index";
import { ImgInfo, TagList } from "./index";

const ImgContainer = (props) => {
  const { history } = props;
  console.log(props.article_id);
  const goDetail = () => {
    history.push(`/pictures/${props.article_id}`);
  };

  const styles = {
    src: props.image_url,
  };

  return (
    <React.Fragment>
      <ImageContainer
        onClick={() => {
          goDetail();
        }}>
        <Permit>
          <Button
            is_abs
            text="하트"
            _onClick={(e) => {
              console.log("heart clicked");
              e.stopPropagation(); // 버블링 방지
            }}></Button>
        </Permit>
        <ImgInfo {...props} />
        <Img src={styles.src} />
      </ImageContainer>
      <Permit></Permit>
    </React.Fragment>
  );
};

const ImageContainer = styled.div`
  position: relative;
  float: left;
  border: 1px solid black;
  width: auto;
  height: fit-content;
  margin: 20px;
  overflow: hidden;
  &:hover * {
    opacity: 1;
  }
`;

const Img = styled.img`
  /* width: 100%; */
  height: auto;
  object-fit: fill;
`;

export default ImgContainer;
