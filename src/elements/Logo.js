import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Logo = props => {
    const { history } = props;
    return (
        <React.Fragment>
            <LogoContainer onClick={() => history.push('/')}>
                Logo
            </LogoContainer>
        </React.Fragment>
    );
};

const LogoContainer = styled.div`
    border: 1px solid black;
    width: 50px;
`;

export default Logo;
