import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as articleActions } from "../redux/modules/article";
import styled from "styled-components";

import { getCookie } from "../shared/cookie";
import { Button, Permit } from "../elements/index";
import { ImgInfo, TagList } from "./index";
import { ReactComponent as LikeItSvg } from "../svg/like_it_white.svg";
import { ReactComponent as LikeItSvgActive } from "../svg/like_it_active.svg";

const ImgContainer = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const myLikes = useSelector((state) => state.article.myLikes);
  const token = getCookie("token");

  const [likeNum, setLikeNum] = React.useState(0);

  React.useEffect(() => {
    console.log(likeNum);
    if (props.liked_users?.includes(user?.uid)) {
      dispatch(articleActions.addLike(props.article_id));
    }
  }, []);

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
          {myLikes.filter((el) => el === props.article_id).length ? (
            <Button
              is_abs
              liked={"좋아요취소"}
              _onClick={(e) => {
                dispatch(
                  articleActions.likeApi(props.article_id, user.uid, token)
                );
                setLikeNum(-1);
                e.stopPropagation(); // 버블링 방지
              }}>
              <LikeItSvgActive className="no_like" />
            </Button>
          ) : (
            <Button
              is_abs
              liked={"좋아요"}
              _onClick={(e) => {
                dispatch(
                  articleActions.likeApi(props.article_id, user.uid, token)
                );
                setLikeNum(1);
                e.stopPropagation(); // 버블링 방지
              }}>
              <LikeItSvg />
            </Button>
          )}
        </Permit>
        <ImgInfo {...props} likeNum={likeNum} />
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
  position: relative;
  display: flex;
  height: fit-content;
  margin: 20px 10px;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: all 0.3s;
    border-radius: 30px;
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover > * {
    opacity: 1;
    
`;

const Img = styled.img`
  width: 100%;
  border-radius: 28px;
  height: auto;
  object-fit: fill;
`;

export default ImgContainer;
