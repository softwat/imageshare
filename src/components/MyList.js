import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../shared/cookie';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgList, ImgContainer, Toggle } from './index.js';

const MyList = props => {
    const dispatch = useDispatch();

    const { history } = props;
    const { articles } = useSelector(state => state.article);
    const { user } = useSelector(state => state.user);
    const _myArticles = useSelector(state => state.article.myArticles);
    const [myArticles, setMyArticle] = React.useState();

    React.useEffect(() => {
        if (myArticles?.length) {
            return;
        }
        dispatch(articleActions.getArticleAPI(getCookie('token')));
        console.log(articles);
        dispatch(articleActions.getMyArticle(articles));
        setMyArticle(_myArticles.filter(el => el.writer_id === user.uid));
        console.log(myArticles);
    }, []);

    return (
        <React.Fragment>
            <Toggle history={history} />
            <h1>내가 올렸어요</h1>
            {myArticles && (
                <ImgList className="image-list" history={history}>
                    {myArticles.map((myArticle, idx) => {
                        return (
                            <ImgContainer
                                key={idx}
                                {...myArticle}
                                history={history}
                            />
                        );
                    })}
                </ImgList>
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
