import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgContainer } from './index.js';

const ImgList = props => {
    const { history } = props;

    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.article);

    React.useEffect(() => {
        // 난 자꾸 바보같이 디스패치를 안해놓고 실행이 안돼서 한참 혼란스러워 한다
        if (articles < 2) {
            dispatch(articleActions.getArticleAPI());
        }
    }, []);

    return (
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
