import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/api";
import moment from "moment";
import { useImperativeHandle } from "react";

const GET_ARTICLE = "GET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";

const getArticle = createAction(GET_ARTICLE, (_articles) => ({
  articles: _articles,
}));
const addArticle = createAction(ADD_ARTICLE, (articles) => ({ articles }));

const initialState = {
  articles: [],
};

const initialArticle = {
  uid: "",
  article_id: "",
  writer_id: "",
  writer_nickname: "summer",
  image_url: "",
  tags: [],
  create_date: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const getArticleAPI = () => {
  return function (dispatch) {
    apis.getArticle().then(({ data }) => {
      const _articles = [];
      data.forEach((d) => _articles.push(d));
      dispatch(getArticle(_articles));
    });
  };
};

const createArtiApi = (tags) => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user.user;
    const user_info = {
      //   uid: _user.uid,
      //   nickname: _user.nickname,
      nickname: "summer",
    };
    const _article = {
      ...initialArticle,
      tags: [...tags],
      create_date: moment().format("YYYY-MM-DD hh:mm:ss"),
    };
    console.log({ ..._article, ...user_info });
    dispatch(addArticle({ ..._article, ...user_info }));
    return;
    apis
      .createArticle(tags)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.articles = action.payload.articles;
      }),
    [ADD_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.articles.unshift(action.payload.articles);
      }),
  },
  initialState
);

export const actionCreators = {
  getArticleAPI,
  createArtiApi,
};
