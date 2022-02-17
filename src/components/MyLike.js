import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../shared/cookie';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgContainer, Toggle, ImgList } from './index.js';

const MyLike = props => {
    const dispatch = useDispatch();
    const token = getCookie('token');

    const { history } = props;
    const myLikes = useSelector(state => state.article.myLikes);
    const breakpointColumnsObj = {
        default: 4,
        1600: 3,
        1200: 2,
        900: 2,
        500: 1,
    };

    React.useEffect(() => {
        // if (myLikes?.length) {
        //     return;
        // }
        console.log(myLikes);
        dispatch(articleActions.getLikeArticleAPI(token));
    }, []);

    return (
        <React.Fragment>
            <Toggle history={history} />
            <h1>내가 올렸어요</h1>
            {myLikes ? (
                <React.Fragment>
                    <Masonry
                        // className="image-list"
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {myLikes.map((article, idx) => {
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
