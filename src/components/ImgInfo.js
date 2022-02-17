import React from "react";
import styled from "styled-components";
import { TagList } from "./index";

import { useSelector } from "react-redux";

const ImgInfo = (props) => {
  const {
    article_id,
    created_date,
    image_url,
    isLike,
    liked_users,
    nickname,
    tags,
    uid,
    writer_id,
    writer_nickname,
    likeNum,
  } = props;

  const articles = useSelector((state) => state.article.articles);
  const article = articles?.filter((el) => el.article_id === article_id);
  let like_cnt = article[0].liked_users?.length;
  const [_like_cnt, setLikeCnt] = React.useState(like_cnt);

  console.log(_like_cnt + likeNum);

  React.useEffect(() => {
    console.log(like_cnt);
  }, []);
  return (
    <React.Fragment>
      <ImgInfoContainer>
        {!_like_cnt ? (
          <p>좋아요 0 개</p>
        ) : (
          <p>
            좋아요
            {_like_cnt < like_cnt
              ? 0 + _like_cnt + likeNum
              : _like_cnt + likeNum}
            개
          </p>
        )}
        <TagList tags={tags} />
      </ImgInfoContainer>
    </React.Fragment>
  );
};

export default ImgInfo;

const ImgInfoContainer = styled.div`
  /* display: flex;
  align-items: start;
  justify-content: space-between; */
  position: absolute;
  width: 100%;
  min-height: 30%;
  bottom: 0;
  padding: 20px;
  color: #fff;
  opacity: 0;
  transition: all 0.3s;
`;
