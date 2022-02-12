import React from 'react';
import styled from 'styled-components';

import { Img } from './index.js';

const ImgList = props => {
    const { imgs } = props;
    const { history } = props;
    return (
        <React.Fragment>
            <ImgListContainer>
                {imgs.map((img, idx) => {
                    return <Img key={idx} history={history}></Img>;
                })}
            </ImgListContainer>
        </React.Fragment>
    );
};

ImgList.defaultProps = {
    imgs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const ImgListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* border: 1px solid black; */
`;

export default ImgList;
