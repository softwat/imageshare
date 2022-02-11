import React from 'react';
import styled from 'styled-components';

import { Search } from './index.js';
import { Logo, Button, Input } from '../elements/index.js';

const Header = props => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <Logo />
                <Search flex-grow="1" />
                <Button width="100px" text="로그인" />
                <Button width="100px" text="회원가입" />
            </HeaderContainer>
        </React.Fragment>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0;
`;

export default Header;
