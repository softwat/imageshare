import React from 'react';
import styled from 'styled-components';

const Img = props => {
    return (
        <React.Fragment>
            <ImgContainer>img</ImgContainer>
        </React.Fragment>
    );
};

const ImgContainer = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 400px;
    margin: 100px;
`;

export default Img;
