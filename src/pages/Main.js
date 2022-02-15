import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as articleActions } from '../redux/modules/article.js';

import { ImgList } from '../components/index.js';

const Main = props => {
    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.article);

    return (
        <React.Fragment>
            <MainContainer>
                <ImgList {...props} />
            </MainContainer>
        </React.Fragment>
    );
};

const MainContainer = styled.div`
    height: 100vh;
`;

export default Main;
