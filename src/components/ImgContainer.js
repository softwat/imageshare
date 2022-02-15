import React from "react";
import { useDispatch } from "react-redux";

import { actionCreators as articleActions } from "../redux/modules/article";
import styled from "styled-components";
import { Button, Permit } from "../elements/index";
import { ImgInfo, TagList } from "./index";

const ImgContainer = (props) => {
  console.log(props);
  const { history } = props;
  const dispatch = useDispatch();
  const goDetail = () => {
    history.push(`/pictures/${props.article_id}`);
    dispatch(articleActions.getArticleAPI());
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
        <Writer>{props.writer_nickname}</Writer>
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

const Writer = styled.h2`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 30px 20px;
  opacity: 0;
  color: #fff;
  transition: all 0.3s;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  /* float: left; */
  width: 30%;
  height: fit-content;
  margin: 20px;
  overflow: hidden;
  border-radius: 28px;
  transition: all 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: #cbff00a1;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover > * {
    opacity: 1;
  }
`;

const Img = styled.img`
  /* width: 100%; */
  height: auto;
  object-fit: fill;
`;

export default ImgContainer;
