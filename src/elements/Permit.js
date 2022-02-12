import React from 'react';

const Permit = props => {
    const { is_login } = props;

    if (is_login) {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    return null;
};

export default Permit;
