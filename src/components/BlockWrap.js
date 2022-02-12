import React from "react";
import styled from "styled-components";

const BlockWrap = (props) => {
  const { children } = props;
  return (
    <BlockWrapStyle>
      <div>{children}</div>
    </BlockWrapStyle>
  );
};

const BlockWrapStyle = styled.div`
  max-width: 600px;
  min-height: 300px;
  margin: 60px auto;
  padding-bottom: 30px;
  border-radius: 30px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 300px;
  }

  h2 {
    padding: 10px 0;
    margin: 20px;
  }
`;

BlockWrap.defaultProps = {
  children: "",
};

export default BlockWrap;
