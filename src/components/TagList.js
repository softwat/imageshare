import React from 'react';
import styled from 'styled-components';

const TagList = props => {
    const { tags } = props;
    return (
        <React.Fragment>
            <TagListS>
                {tags.map((tag, idx) => {
                    return <li key={idx}>#{tag}</li>;
                })}
            </TagListS>
        </React.Fragment>
    );
};

const TagListS = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    width: 100%;
    margin-right: -4px;
    li {
        margin: 4px;
        padding: 6px 10px;
        border: solid 1px #ccc;
        border-radius: 100px;
        background-color: #fafafc;
        color: #ff81c6;
    }
`;

TagList.defaultProps = {
    tags: ['xoxo', 'dodo'],
};
export default TagList;
