import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LikeItSvg } from '../svg/like_it_defualt.svg';
import { ReactComponent as LikeItSvgActive } from '../svg/like_it_active.svg';

const LikeIt = props => {
    const { uid, liked_users } = props;
    const isLikeUser = liked_users.find(v => v === uid);
    const [isLike, setIsLike] = React.useState(isLikeUser === uid);

    const clickLike = () => {
        setIsLike(!isLike);
    };

    React.useEffect(() => {}, []);

    return (
        <LikeS
            onClick={() => {
                clickLike();
            }}
        >
            {isLike ? <LikeItSvgActive /> : <LikeItSvg />}
            <span>{liked_users.length}</span>
        </LikeS>
    );
};

LikeIt.defaultProps = {
    uid: null,
    liked_users: [],
};

const LikeS = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 30px;
        height: 30px;
    }
    span {
        margin-left: 6px;
    }
`;
export default LikeIt;
