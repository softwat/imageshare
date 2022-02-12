import React from "react";
import styled from "styled-components";
const InputTag = (props) => {
  const tagRef = React.useRef();
  const { idx, onChange } = props;

  return (
    <InputTagStyle>
      <span className="tag">sss </span>
      <input
        type="text"
        id={`tag_${idx}`}
        ref={tagRef}
        onChange={onChange}
        placeholder="태그입력"
      />
    </InputTagStyle>
  );
};
const InputTagStyle = styled.div`
  display: inline-block;
  min-width: 60px;
  padding: 6px;

  input {
    padding: 6px 10px;
    border-radius: 20px;
    border: solid 1px #ccc;
  }
  .tag {
    padding: 4px 6px;
    margin-right: 6px;
    border: solid 1px #ccc;
  }
`;
InputTag.defaultProps = {
  idx: 1,
  onChange: () => {},
};
export default InputTag;
