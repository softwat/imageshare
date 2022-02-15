import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgContainer, Toggle } from './index.js';

const Result = props => {
    const dispatch = useDispatch();

    const { history } = props;
    const searchRes = useSelector(state => state.article.searchRes);
    console.log(searchRes);

    React.useEffect(() => {
        if (searchRes) {
            return;
        }
        dispatch(articleActions.getMyArticleAPI());
    }, []);

    return (
        <React.Fragment>
            <h1>검색결과입니다</h1>
            {searchRes && (
                <ImageList className="image-list">
                    {searchRes.map((myArticle, idx) => {
                        return (
                            <ImgContainer
                                key={idx}
                                {...myArticle}
                                history={history}
                            />
                        );
                    })}
                </ImageList>
            )}
        </React.Fragment>
    );
};

Result.defaultProps = {
    articles: [],
};

const ImageList = styled.div`
    /* max-width: 500px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 0; */
`;

export default Result;
