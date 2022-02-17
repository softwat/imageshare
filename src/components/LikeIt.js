import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
import { ReactComponent as LikeItSvg } from "../svg/like_it_defualt.svg";
import { ReactComponent as LikeItSvgActive } from "../svg/like_it_active.svg";
import { getCookie } from "../shared/cookie";

const LikeIt = (props) => {
  const { article_id, uid, liked_users } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const myLikes = useSelector((state) => state.article.myLikes);
  const [isLike, setIsLike] = React.useState(
    myLikes.filter((el) => el === article_id).length
  );
  const token = getCookie("token");

  const clickLike = () => {
    dispatch(articleActions.likeApi(article_id, uid, token));
  };

  console.log(myLikes.filter((el) => el === article_id).length);

  React.useEffect(() => {
    if (props.liked_users?.includes(user.uid)) {
      dispatch(articleActions.addLike(article_id));
    }
  }, []);

  return (
    <LikeS
      onClick={() => {
        clickLike();
        setIsLike(!isLike);
      }}>
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
