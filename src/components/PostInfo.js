import React from "react";
import styled from "styled-components";

const PostInfo = ({ writer_id, writer_nickname, created_date }) => {
  return (
    <PostInfoS>
      <div>{writer_nickname}</div>
      <span>{created_date}</span>
      <button>삭제</button>
    </PostInfoS>
  );
};

const PostInfoS = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  padding-bottom: 0;

  span {
    margin-left: auto;
    margin-right: 10px;
  }

  button {
    font-size: 16px;
    padding: 6px 10px;
    border: none;
    border-radius: 30px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #ff54b0;
    }
  }
`;

export default PostInfo;
