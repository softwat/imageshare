import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import { actionCreators as imageActions } from "./image";
import { apis } from "../../shared/api";
import { storage } from "../../shared/firebase";

const GET_ARTICLE = "GET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_TAGS = "ADDTAGS";

const getArticle = createAction(GET_ARTICLE, (_articles) => ({
  articles: _articles,
}));
const addArticle = createAction(ADD_ARTICLE, (articles) => ({ articles }));
const addTags = createAction(ADD_ARTICLE, (tag) => ({ tag }));
const initialState = {
  articles: [],
};

const initialArticle = {
  uid: 98,
  article_id: 2,
  writer_id: 1,
  writer_nickname: "summer",
  image_url: "",
  tags: [],
  created_date: moment().format("YYYY-MM-DD hh:mm:ss"),
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

const getOneArticleAPI = (id) => {
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
    const _image = getState().image.preview;

    const user_info = {
      //   uid: _user.uid,
      //   nickname: _user.nickname,
      uid: 1,
      writer_nickname: "summer",
    };

    const _article = {
      ...initialArticle,
      created_date: moment().format("YYYY-MM-DD hh:mm:ss"),
    };
    const _upload = storage
      .ref(`image/${user_info.nickname}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          return url;
        })
        .then((url) => {
          apis
            .createArticle({
              ...initialArticle,
              ..._article,
              ...user_info,
              image_url: url,
              tags: [...tags],
            })
            .then(() => {
              dispatch(
                addArticle({
                  ..._article,
                  ...user_info,
                  tags: [...tags],
                  image_url: url,
                })
              );
              // history.replace("/");
              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              alert("게시글 작성에 실패하였습니다.");
              console.log(err);
            });
        })
        .catch((err) => {
          alert("이미지 저장에 실패아였습니다.");
          console.log(err);
        });
    });
    return;
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
    [ADD_TAGS]: (state, action) =>
      produce(state, (draft) => {
        draft.tags = action.payload.tags;
      }),
    [GET_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.articles = action.payload.articles;
        // console.log(draft.articles);
      }),
  },
  initialState
);

export const actionCreators = {
  getArticleAPI,
  getOneArticleAPI,
  createArtiApi,
  addTags,
};
