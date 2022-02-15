import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgContainer } from './index.js';

const ImgList = props => {
    const dispatch = useDispatch();

    const { history } = props;

    const { articles } = useSelector(state => state.article);

    React.useEffect(() => {
        if (articles < 2) {
            dispatch(articleActions.getArticleAPI());
        }
    });

    return history.location.pathname === '/myprofile' ? (
        <React.Fragment>
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
        </React.Fragment>
    ) : (
        <React.Fragment>
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
        </React.Fragment>
    );
};

ImgList.defaultProps = {
    articles: [],
};

const ImageList = styled.div`
    /* max-width: 500px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 0; */
`;

export default ImgList;
