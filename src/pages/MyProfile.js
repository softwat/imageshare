import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { actionCreators as acticleActions } from '../redux/modules/article.js';

import { ImgList, Toggle } from '../components/index.js';
import { Button } from '../elements/index.js';

const MyProfile = props => {
    const dispatch = useDispatch();
    const myArticles = useSelector(state => state.myArticle);
    console.log(myArticles);
    const { history } = props;
    React.useEffect(() => {
        dispatch(acticleActions.getMyArticleAPI());
    });

    return (
        <React.Fragment>
            <MyProfileContainer>
                <Toggle history={history} />
                {/* <ImgList history={history} /> */}
            </MyProfileContainer>
        </React.Fragment>
    );
};

const MyProfileContainer = styled.div`
    height: 100vh;
`;

export default MyProfile;
