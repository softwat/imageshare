import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ImgList, Toggle } from '../components/index.js';
import { Button } from '../elements/index.js';

const MyProfile = props => {
    const myArticles = useSelector(state => state.myArticle);
    const { history } = props;
    return (
        <React.Fragment>
            <MyProfileContainer>
                <Toggle />
                <ImgList history={history} myArticles={myArticles} />
            </MyProfileContainer>
        </React.Fragment>
    );
};

const MyProfileContainer = styled.div`
    height: 100vh;
`;

export default MyProfile;
