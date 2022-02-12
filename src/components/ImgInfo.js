import React from 'react';
import styled from 'styled-components';
import { TagList } from './index';

const ImgInfo = props => {
    return (
        <React.Fragment>
            <ImgInfoContainer>
                <p>좋아요 수</p>
                <TagList />
            </ImgInfoContainer>
        </React.Fragment>
    );
};

export default ImgInfo;

const ImgInfoContainer = styled.div`
    position: absolute;
    border: 1px solid black;
    width: 100%;
    height: 30%;
    bottom: 0;
`;
