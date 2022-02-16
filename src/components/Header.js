import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Search } from './index.js';
import { Logo, Button, Input } from '../elements/index.js';

import { actionCreators as userActions } from '../redux/modules/user';

const Header = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const goProfile = () => props.history.push('/myprofile');
    const goSignup = () => props.history.push('/signup');

    return (
        <React.Fragment>
            <HeaderContainer>
                <Logo {...props} />
                <Search flex-grow="1" />
                {!user.is_login ? (
                    <React.Fragment>
                        <Button
                            width="90px"
                            text="로그인"
                            _onClick={() => {
                                props.history.push('/login');
                            }}
                        />
                        <Button
                            _onClick={() => {
                                props.history.push('/signup');
                            }}
                            width="90px"
                            text="회원가입"
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Button
                            width="90px"
                            text="프로필"
                            _onClick={goProfile}
                        />
                        <Button
                            width="90px"
                            text="로그아웃"
                            _onClick={() => {
                                dispatch(userActions.logOutAction({}));
                            }}
                        />
                    </React.Fragment>
                )}
            </HeaderContainer>
        </React.Fragment>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    width: 80vw;
    height: 40px;
    margin: 30px auto 30px auto;
    button {
        margin-left: 10px;
        border-radius: 100px;
        color: #797979;

        &:hover {
            border-color: #f69c9c;
            box-shadow: 1px 1px 4px 0px #f4d5d5;
        }
    }
`;

export default Header;
