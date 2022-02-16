import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
const InputTag = (props) => {
  const { idx } = props;
  const dispatch = useDispatch();
  const tagRef = React.useRef();
  const [tag, setTag] = React.useState("");

  const onChange = (e) => {
    setTag(e.target.value);
  };

  const inputTags = () => {
    console.log(tag);
    // dispatch(articleActions.addTags(tag.split("#")));
    // setTag("");
  };

  return (
    <InputTagStyle>
      {/* <span className="tag">sss </span> */}
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            inputTags();
          }
        }}
        type="text"
        // id={`tag_${idx}`}
        id="tag"
        ref={tagRef}
        onChange={onChange}
        placeholder="태그를 입력해주세요 (필수) #귀여워 #가보자고"
      />
    </InputTagStyle>
  );
};

const InputTagStyle = styled.div`
  display: inline-block;
  min-width: 300px;
  padding: 6px;

  input {
    width: 100%;
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
