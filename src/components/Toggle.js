import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getCookie } from '../shared/cookie';

import { actionCreators as articleActions } from '../redux/modules/article.js';

const Toggle = props => {
    const { history } = props;
    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.article);

    const mineClick = () => {
        history.push('/myprofile/mylist');
        dispatch(articleActions.getArticleAPI(getCookie()));
        dispatch(articleActions.getMyArticleAPI(articles));
    };
    const likeClick = () => {
        history.push('/myprofile/mylike');
        // dispatch(acticleActions.getArticleAPI());
        // dispatch(acticleActions.getMyLikeAPI());
    };
    return (
        <RadioToolBar>
            <input
                type="radio"
                id="radioMine"
                name="radioProfile"
                value="mine"
                onClick={mineClick}
                // defaultChecked
            />
            <label htmlFor="radioMine">내가 올린 사진</label>

            <input
                type="radio"
                id="radioLiked"
                name="radioProfile"
                value="liked"
                onClick={likeClick}
            />
            <label htmlFor="radioLiked">내가 좋아요 한 사진</label>
        </RadioToolBar>
    );
};

const RadioToolBar = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    input[type='radio'] {
        opacity: 0;
        position: fixed;
        width: 0;
    }
    label {
        width: 30%;
        text-align: center;
        display: inline-block;
        background-color: #ddd;
        padding: 10px 20px;
        font-family: sans-serif, Arial;
        font-size: 16px;
        border-radius: 12px;
        color: #fff;
    }
    input[type='radio']:checked + label {
        background-color: #ff54b0;
    }
    label:hover {
        background-color: #ff54b0;
    }
`;

export default Toggle;
