import React from 'react';
import styled from 'styled-components';

const Tag = props => {
    return (
        <React.Fragment>
            <TagContainer>Tag</TagContainer>
        </React.Fragment>
    );
};

const TagContainer = styled.div`
    border: 1px solid black;
    /* width: 50px; */
    font-size: 40px;
`;

export default Tag;
