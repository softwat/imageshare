import React from 'react';
import styled from 'styled-components';
import { TagList } from './index';

import { useSelector } from 'react-redux';

const ImgInfo = props => {
    const {
        article_id,
        created_date,
        image_url,
        isLike,
        liked_users,
        nickname,
        tags,
        uid,
        writer_id,
        writer_nickname,
    } = props;

    const articles = useSelector(state => state.article.articles);

    React.useEffect(() => {
        console.log(articles);
    }, [liked_users]);
    return (
        <React.Fragment>
            <ImgInfoContainer>
                <p>좋아요 {liked_users?.length ? liked_users?.length : 0} 개</p>
                <TagList tags={tags} />
            </ImgInfoContainer>
        </React.Fragment>
    );
};

export default ImgInfo;

const ImgInfoContainer = styled.div`
    /* display: flex;
  align-items: start;
  justify-content: space-between; */
    position: absolute;
    width: 100%;
    min-height: 30%;
    bottom: 0;
    padding: 20px;
    color: #fff;
    opacity: 0;
    transition: all 0.3s;
`;
