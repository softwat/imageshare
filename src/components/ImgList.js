import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import "../App.css";

import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../shared/cookie";

import { actionCreators as articleActions } from "../redux/modules/article.js";

import { ImgContainer } from "./index.js";
import { Permit } from "../elements/index.js";

const ImgList = (props) => {
  const dispatch = useDispatch();

  const { history } = props;

  const { articles } = useSelector((state) => state.article);

  const breakpointColumnsObj = {
    default: 5,
    1600: 4,
    1200: 3,
    900: 2,
    500: 1,
  };

  React.useEffect(() => {
    if (articles < 2) {
      dispatch(articleActions.getArticleAPI(getCookie("token")));
    }
  }, []);

  return history.location.pathname === "/myprofile" ? (
    <React.Fragment>
      <Masonry
        // className="image-list"
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {articles.map((article, idx) => {
          return <ImgContainer key={idx} {...article} history={history} />;
        })}
      </Masonry>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Masonry
        // className="image-list"
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <Permit>
          <Write
            onClick={() => {
              history.push("/create");
            }}>
            <Plus>+</Plus>
          </Write>
        </Permit>
        {articles.map((article, idx) => {
          return <ImgContainer key={idx} {...article} history={history} />;
        })}
      </Masonry>
    </React.Fragment>
  );
};

ImgList.defaultProps = {
  articles: [],
};

const Write = styled.div`
  /* display: flex; */
  position: relative;
  /* float: left; */
  width: auto;
  height: 300px;
  margin: 20px 0;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: #cbff00a1;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover > * {
    opacity: 1;
  }
`;

const Plus = styled.span`
  position: absolute;
  bottom: calc(50% - 100px);
  right: calc(50% - 40px);
  font-size: 150px;
  color: white;
`;

export default ImgList;
