import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../shared/cookie';

import MyImgContainer from './MyImgContainer';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgList, ImgContainer, Toggle } from './index.js';

const MyList = props => {
    const dispatch = useDispatch();
    const token = getCookie('token');

    const { history } = props;
    const myArticles = useSelector(state => state.article.myArticles);
    const breakpointColumnsObj = {
        default: 4,
        1600: 3,
        1200: 2,
        900: 2,
        500: 1,
    };

    console.log(myArticles);
    React.useEffect(() => {
        if (myArticles?.length) {
            return;
        }
        dispatch(articleActions.getMyArticleAPI(token));
    }, []);

    return (
        <React.Fragment>
            <Toggle history={history} />
            <h1>내가 올렸어요</h1>
            {myArticles ? (
                <React.Fragment>
                    <Masonry
                        // className="image-list"
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {myArticles.map((article, idx) => {
                            return (
                                <ImgContainer
                                    key={idx}
                                    {...article}
                                    history={history}
                                />
                            );
                        })}
                    </Masonry>
                </React.Fragment>
            ) : (
                {}
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
