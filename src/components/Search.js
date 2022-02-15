import React from "react";
import styled from "styled-components";

import { Input, Button } from "../elements/index.js";

const Search = (props) => {
  return (
    <SearchContainer>
      <Input></Input>
      <Button text="검색" width="100px" />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: 5vw;
`;
export default Search;
