import React from "react";
import styled from "styled-components";
import ImgUpload from "../shared/ImgUpload";
import ImgWrap from "../components/ImgWrap";
import InputTag from "../element/InputTag";

const Create = () => {
  return (
    <CreateStyle>
      <h2>이미지 업로드</h2>
      <ImgUpload />
      <ImgWrap />
      <div className="input_tag">
        <InputTag />
      </div>
      <button>올리기</button>
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
