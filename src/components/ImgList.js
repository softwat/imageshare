import React from 'react';
import styled from 'styled-components';

import { Img } from '../elements/index.js';

const ImgList = props => {
    return (
        <React.Fragment>
            <ImgListContainer>
                <Img></Img>
                <Img></Img>
                <Img></Img>
                <Img></Img>
                <Img></Img>
                <Img></Img>
            </ImgListContainer>
        </React.Fragment>
    );
};

const ImgListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid black;
`;

export default ImgList;
