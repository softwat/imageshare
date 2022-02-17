import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
import { ReactComponent as LikeItSvg } from "../svg/like_it_defualt.svg";
import { ReactComponent as LikeItSvgActive } from "../svg/like_it_active.svg";
import { getCookie } from "../shared/cookie";

const LikeIt = (props) => {
  const { article, liked_users, isLike } = props;
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const { user } = useSelector((state) => state.user);
  const [_isLike, setIsLike] = React.useState(isLike);
  const token = getCookie("token");
  console.log(article);
  const myLikes = useSelector((state) => state.article.myLikes);
  const clickLike = () => {
    dispatch(articleActions.likeApi(props.article_id, user_info.uid, token));
    setIsLike(!isLike);
  };

  React.useEffect(() => {
    if (props.liked_users?.includes(user.uid)) {
      dispatch(articleActions.addLike(props.article_id));
    }
  }, []);
  console.log(liked_users.length);

  return (
    <LikeS
      onClick={() => {
        clickLike();
      }}>
      {myLikes.filter((el) => el === props.article_id).length ? (
        <>
          <LikeItSvgActive />
          <span>{liked_users.length}</span>
        </>
      ) : (
        <>
          <LikeItSvg />
          <span>{liked_users.length}</span>
        </>
      )}
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
