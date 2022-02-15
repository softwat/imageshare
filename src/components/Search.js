import React from "react";
import styled from "styled-components";

import { actionCreators as articleActions } from "../redux/modules/article.js";

import { SearchInput, Button } from "../elements/index.js";
import { useDispatch } from "react-redux";

const Search = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState();
  const keywordInput = React.useRef();
  const inputHandler = (e) => {
    setKeyword(e.target.value);
  };
  const btnHandler = () => {
    console.log(keyword);
    dispatch(articleActions.searchTagAPI(keyword));
    history.push(`/search`);
  };
  return (
    <SearchContainer>
      <SearchInput _onChange={inputHandler} _ref={keywordInput}></SearchInput>
      <Button text="검색" width="50px" _onClick={btnHandler} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: 5vw;
`;
export default Search;
