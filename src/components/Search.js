import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { getCookie } from '../shared/cookie';
import { SearchInput, Button } from '../elements/index.js';
import { useDispatch } from 'react-redux';

const Search = props => {
    const { history } = props;
    const dispatch = useDispatch();
    let token = getCookie('token');
    const { searchRes } = useSelector(state => state.article);

    const [keyword, setKeyword] = React.useState();
    const keywordInput = React.useRef();
    const inputHandler = e => {
        setKeyword(e.target.value);
    };
    const btnHandler = () => {
        console.log(keyword);
        dispatch(articleActions.searchTagAPI(keyword, token));
        console.log(searchRes);
        history.push(`/result`);
    };
    return (
        <SearchContainer>
            <SearchInput
                _onChange={inputHandler}
                _ref={keywordInput}
            ></SearchInput>
            <Button text="" width="40px" _onClick={btnHandler} />
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;

    input {
        max-width: 420px;
        border: 1px solid #ccc;
        border-radius: 100px;
        padding: 0 20px;
    }

    button {
        border-radius: 100px;
        background: url(/search.png) no-repeat center / 40%;
    }
`;
export default Search;
