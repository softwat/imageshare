import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/api";
import moment from "moment";
import { getByDisplayValue } from "@testing-library/react";

const SET_TAGS = "SET_TAGS";
const ADD_ARTICLE = "ADD_ARTICLE";

const setTags = createAction(SET_TAGS, (tags) => ({ tags }));
const addArticle = createAction(ADD_ARTICLE, (list) => ({ list }));

const initialState = {
  list: [],
};

const initialArticle = {
  article_id: "",
  writer_id: "",
  writer_nickname: "summer",
  image_url: "",
  tags: [],
  create_date: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const createArtiApi = (tags) => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user.user;
    const user_info = {
      //   uid: uid,
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
    [SET_TAGS]: (state, action) =>
      produce(state, (draft) => {
        draft.tags = action.payload.tags;
      }),
    [ADD_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  createArtiApi,
  setTags,
};

export { actionCreators };
