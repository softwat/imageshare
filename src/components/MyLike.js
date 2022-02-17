import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgContainer, Toggle } from './index.js';

const MyLike = props => {
    const dispatch = useDispatch();

    const { history } = props;
    const myLikes = useSelector(state => state.article.myLikes);
    console.log(myLikes);

    React.useEffect(() => {
        if (myLikes) {
            return;
        }
        // dispatch(articleActions.getMyLikeAPI());
    }, []);

    return (
        <React.Fragment>
            <Toggle history={history} />
            <h1>내가 좋아요</h1>
            {myLikes && (
                <ImageList className="image-list">
                    {myLikes.map((myLike, idx) => {
                        return (
                            <ImgContainer
                                key={idx}
                                {...myLike}
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
