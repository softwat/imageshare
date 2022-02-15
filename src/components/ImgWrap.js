import React from "react";
import styled from "styled-components";

const DEFAULT_IMG =
  "https://cdn.crowdpic.net/list-thumb/thumb_l_F849A239E3EC8D949EB01552E25497E0.jpg";
const ImgWrap = ({ image_url }) => {
  // console.log(image_url);
  return (
    <ImgStyle>
      <img src={image_url ? image_url : DEFAULT_IMG} alt="이미지" />
    </ImgStyle>
  );
};

const ImgStyle = styled.div`
  display: flex;
  min-height: 300px;
  margin: 20px 0;
  border: solid 1px #ccc;

  img {
    width: 100%;
  }
`;

export default ImgWrap;
