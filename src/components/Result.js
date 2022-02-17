import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import '../App.css';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgList, ImgContainer, Toggle } from './index.js';

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

    const breakpointColumnsObj = {
        default: 4,
        1600: 3,
        1200: 2,
        900: 2,
        500: 1,
    };

    return (
        <React.Fragment>
            <h1>검색결과입니다</h1>
            {searchRes && (
                <Masonry
                    // className="image-list"
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {searchRes.map((myArticle, idx) => {
                        return (
                            <ImgContainer
                                key={idx}
                                {...myArticle}
                                history={history}
                            />
                        );
                    })}
                </Masonry>
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
