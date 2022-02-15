import React from 'react';
import styled from 'styled-components';

const SearchInput = props => {
    const {
        label,
        placeholder,
        _onChange,
        type,
        multiLine,
        value,
        width,
        name,
        search,
    } = props;

    if (multiLine) {
        return (
            <React.Fragment>
                <p>{label}</p>
                <ElTextarea
                    rows={10}
                    value={value}
                    placeholder={placeholder}
                    onChange={_onChange}
                ></ElTextarea>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            {label ? <p>{label}</p> : null}

            <ElInput
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={_onChange}
                width={width}
                name={name}
                search={search}
            ></ElInput>
        </React.Fragment>
    );
};

SearchInput.defaultProps = {
    multiLine: false,
    label: '',
    place_holder: '텍스트를 입력해주세요',
    type: 'text',
    width: '100%',
    name: '',
    direction: 'center',
    _onChange: () => {},
    search: '',
};

const ElInput = styled.input`
    border: 1px solid #212121;
    padding: 12px 4px;
    box-sizing: border-box;
    flex-grow: 1;
    /* width: ${props => props.width}; */
    /* width: 100%; */
    /* flex-basis: ${props => (props.search ? 'fit-content;' : null)}; */
`;

const ElTextarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default SearchInput;
