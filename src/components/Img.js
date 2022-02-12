import React from 'react';
import styled from 'styled-components';
import { Button, Permit } from '../elements/index';
import { ImgInfo, TagList } from './index';

const Img = props => {
    const { history } = props;
    const goDetail = () => history.push('/detail');

    return (
        <React.Fragment>
            <ImgContainer
                onClick={() => {
                    goDetail();
                    console.log('img clicked');
                }}
            >
                <Permit>
                    <Button
                        is_abs
                        text="하트"
                        _onClick={e => {
                            console.log('heart clicked');
                            e.stopPropagation(); // 버블링 방지
                        }}
                    ></Button>
                </Permit>
                img
                <ImgInfo />
            </ImgContainer>
            <Permit></Permit>
        </React.Fragment>
    );
};

const ImgContainer = styled.div`
    position: relative;
    border: 1px solid black;
    width: 200px;
    height: 400px;
    margin: 10px;
    &:hover * {
        opacity: 1;
    }
`;

export default Img;
