import React from "react";
import styled from "styled-components";

const ImgUpload = () => {
  const fileInput = React.useRef();
  const selectFile = () => {};
  return (
    <ImgWrap>
      <label htmlFor="uploadImg" className="flex-auto">
        <input
          id="uploadImg"
          type="file"
          onChange={selectFile}
          ref={fileInput}
        />
        <div>
          <button>업로드하기</button>
        </div>
      </label>
    </ImgWrap>
  );
};

const ImgWrap = styled.div`
  width: 100%;

  label {
    width: 100%;
    display: flex;
    align-items: stretch;
  }

  input {
    flex: auto;
    padding: 10px;
    margin-right: 10px;
  }

  button {
    height: 100%;
    cursor: pointer;
  }
`;
export default ImgUpload;
