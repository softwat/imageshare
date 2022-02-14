import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImgUpload from "../shared/ImgUpload";
import ImgWrap from "../components/ImgWrap";
import InputTag from "../element/InputTag";

import { apis } from "../shared/api";

const Create = () => {
  const dispatch = useDispatch();
  const uploadImg = useSelector((state) => state.image);

  const createArti = () => {};

  return (
    <CreateStyle>
      <h2>이미지 업로드</h2>
      <ImgUpload />
      <ImgWrap image_url={uploadImg.preview} />
      <div className="input_tag">
        <InputTag />
      </div>
      <button
        disabled={uploadImg.uploading ? "disabled" : ""}
        onClick={() => {
          createArti();
        }}>
        올리기
      </button>
    </CreateStyle>
  );
};

const CreateStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    margin: 20px 0;
  }

  input {
    border: solid 1px #ccc;
  }

  .input_tag {
    margin: 10px;
    margin-left: -6px;
  }

  button {
    font-size: 16px;
    padding: 6px 10px;
    border: none;
    background-color: red;
    color: #fff;
    cursor: pointer;
  }
`;
export default Create;
