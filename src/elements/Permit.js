import React from 'react';

import { useSelector } from 'react-redux';

const Permit = props => {
    const user = useSelector(state => state.user);

    return user.is_login ? (
        <React.Fragment>{props.children}</React.Fragment>
    ) : null;
};

export default Permit;
