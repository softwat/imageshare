import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgContainer, Toggle } from './index.js';

const MyList = props => {
    const dispatch = useDispatch();

    const { history } = props;
    const myArticles = useSelector(state => state.article.myArticles);
    console.log(myArticles);

    React.useEffect(() => {
        if (myArticles) {
            return;
        }
        dispatch(articleActions.getMyArticleAPI());
    }, []);

    return (
        <React.Fragment>
            <Toggle history={history} />
            <h1>내가 올렸어요</h1>
            {myArticles && (
                <ImageList className="image-list">
                    {myArticles.map((myArticle, idx) => {
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

MyList.defaultProps = {
    articles: [],
};

const ImageList = styled.div`
    /* max-width: 500px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 0; */
`;

export default MyList;
