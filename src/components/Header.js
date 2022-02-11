import React from 'react';
import styled from 'styled-components';

import { Search } from './index.js';
import { Logo, Button, Input } from '../elements/index.js';

const Header = props => {
    const [is_login, setLogin] = React.useState();
    const fakeLogin = () => setLogin(props._is_login);
    const goProfile = () => props.history.push('/myprofile');
    const fakeLogout = () => {
        setLogin(false);
        props.history.replace('/');
    };
    return (
        <React.Fragment>
            <HeaderContainer>
                <Logo {...props} />
                <Search flex-grow="1" />
                {!is_login ? (
                    <React.Fragment>
                        <Button
                            width="100px"
                            text="로그인"
                            _onClick={fakeLogin}
                        />
                        <Button width="100px" text="회원가입" />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Button
                            width="100px"
                            text="프로필"
                            _onClick={goProfile}
                        />
                        <Button
                            width="100px"
                            text="로그아웃"
                            _onClick={fakeLogout}
                        />
                    </React.Fragment>
                )}
            </HeaderContainer>
        </React.Fragment>
    );
};
Header.defaultProps = {
    _is_login: true,
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0;
`;

export default Header;
