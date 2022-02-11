import React from 'react';
import styled from 'styled-components';

import { Tag } from '../elements/index';

const TagList = props => {
    return (
        <TagListContainer>
            <Tag />
            <Tag />
            <Tag />
            <Tag />
        </TagListContainer>
    );
};

const TagListContainer = styled.div`
    border: 1px solid black;
    height: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default TagList;
