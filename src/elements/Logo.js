import React from 'react';
import styled from 'styled-components';

const Logo = props => {
    return (
        <React.Fragment>
            <LogoContainer>Logo</LogoContainer>
        </React.Fragment>
    );
};

const LogoContainer = styled.div`
    border: 1px solid black;
    width: 50px;
`;

export default Logo;
