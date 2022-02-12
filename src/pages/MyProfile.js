import React from 'react';
import styled from 'styled-components';

import { ImgList, Toggle } from '../components/index.js';
import { Button } from '../elements/index.js';

const MyProfile = props => {
    const { history } = props;
    return (
        <React.Fragment>
            <MyProfileContainer>
                <Toggle />
                <ImgList history={history} />
            </MyProfileContainer>
        </React.Fragment>
    );
};

const MyProfileContainer = styled.div`
    height: 100vh;
`;

export default MyProfile;
