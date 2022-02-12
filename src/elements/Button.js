import React from 'react';
import styled from 'styled-components';

const Button = props => {
    const { text, _onClick, is_abs, margin, width, padding } = props;

    if (is_abs) {
        return (
            <React.Fragment>
                <LikeButton onClick={_onClick}>{text}</LikeButton>
            </React.Fragment>
        );
    }

    const styles = {
        margin: margin,
        width: width,
        padding: padding,
    };

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>
                {text}
            </ElButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: false,
    _onClick: () => {},
    is_abs: false,
    margin: false,
    width: '100%',
    padding: '12px 0px',
};

const ElButton = styled.button`
    width: ${props => props.width};
    background-color: red;
    color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    padding: ${props => props.padding};
    ${props => (props.margin ? `margin: ${props.margin};` : '')}
`;

const LikeButton = styled.button`
    opacity: 0;
    width: 50px;
    height: 50px;
    background-color: pink;
    color: #ffffff;
    box-sizing: border-box;
    /* font-size: 36px; */
    font-weight: 800;
    position: absolute;
    bottom: 48%;
    right: 42%;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
    &:hover {
        background-color: red;
    }
`;

export default Button;
