import React from 'react';

import { useSelector } from 'react-redux';

import { getCookie } from '../shared/cookie';

const Permit = props => {
    const user = useSelector(state => state.user);
    const token = getCookie('token');

    return token ? <React.Fragment>{props.children}</React.Fragment> : null;
};

export default Permit;
