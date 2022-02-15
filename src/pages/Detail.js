import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BlockWrap from '../components/BlockWrap';
import PostInfo from '../components/PostInfo';
import ImgWrap from '../components/ImgWrap';
import LikeIt from '../components/LikeIt';
import TagList from '../components/TagList';

const Detail = props => {
    const { history } = props;
    const dispatch = useDispatch();

    const { id } = useParams();
    const articles = useSelector(state => state.article.articles);
    const article_idx = articles.findIndex(a => {
        return a.article_id === +id;
    });
    const article = articles[article_idx];
    if (!article) history.replace('/');
    console.log(article);

    const user = useSelector(state => state.user);
    console.log(user);

    const {
        writer_id,
        writer_nickname,
        image_url,
        liked_users,
        uid,
        tags,
        created_date,
    } = article;

    return (
        <DetailS>
            {user.is_login ? <div>login</div> : <div>no</div>}
            <BlockWrap>
                <PostInfo
                    writer_nickname={writer_nickname}
                    writer_id={writer_id}
                    created_date={created_date}
                />
                <ImgWrap image_url={image_url} />
                <div className="like_tag_wrap">
                    {/* <LikeIt liked_users={liked_users.length} /> */}
                    <LikeIt liked_users={liked_users} />
                    <TagList tags={tags} />
                </div>
            </BlockWrap>
            <ToHome>Home</ToHome>
        </DetailS>
    );
};

Detail.defaultProps = {
    post_id: '',
    writer_id: 3,
    writer_nickname: 'summer',
    liked_users: ['adsfadsfasdfasdf', 'summer'],
    uid: 'summer',
    nickname: 'summer',
    image_url:
        'https://firebasestorage.googleapis.com/v0/b/jaemagazine-45854.appspot.com/o/image%2FJULhtsuBmabuNrbQ5Vv6ZLivSUB3_1644477129815?alt=media&token=7f1f8be5-6c8d-4314-b7c5-d32cfb70186e',
    tags: ['귀여워', '멍멍이'],
    created_date: '2022-02-14',
};

const ToHome = styled.span`
    --btnsize: 60px;
    position: fixed;
    bottom: 100px;
    right: 100px;
    display: inline-block;
    width: var(--btnsize);
    height: var(--btnsize);
    line-height: var(--btnsize);
    text-align: center;
    color: #eee;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
    transition: all 0.2s;
    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
`;
const DetailS = styled.div`
    .like_tag_wrap {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding: 10px 20px;
    }
`;
export default Detail;
