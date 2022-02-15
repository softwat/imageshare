import React from "react";
import styled from "styled-components";
import { TagList } from "./index";

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
  } = props;
  return (
    <React.Fragment>
      <ImgInfoContainer>
        {/* <p>좋아요 {liked_users.length} 개</p> */}
        <TagList tags={tags} />
      </ImgInfoContainer>
    </React.Fragment>
  );
};

export default ImgInfo;

const ImgInfoContainer = styled.div`
  opacity: 0;
  position: absolute;
  /* border: 1px solid black; */
  width: 100%;
  height: 30%;
  bottom: 0;
`;
