import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../shared/cookie';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgContainer, Toggle } from './index.js';

const MyLike = props => {
    const dispatch = useDispatch();
    const token = getCookie('token');

    const { history } = props;
    const { articles } = useSelector(state => state.article);

    React.useEffect(() => {
        if (articles?.length) {
            return;
        }
        dispatch(articleActions.getLikeArticleAPI(token));
    }, []);

    return (
        <React.Fragment>
            <Toggle history={history} />
            <h1>내가 좋아요</h1>
            {articles && (
                <ImageList className="image-list">
                    {articles.map((article, idx) => {
                        return (
                            <ImgContainer
                                key={idx}
                                {...article}
                                history={history}
                            />
                        );
                    })}
                </ImageList>
            )}
        </React.Fragment>
    );
};

MyLike.defaultProps = {
    articles: [],
};

const ImageList = styled.div`
    /* max-width: 500px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 0; */
`;

export default MyLike;
