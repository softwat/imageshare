import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import { actionCreators as imageActions } from "./image";
import { apis } from "../../shared/api";
import { storage } from "../../shared/firebase";

const GET_ARTICLE = "GET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";
const GET_MY_ARTICLE = "GET_MY_ARTICLE";
const GET_MY_LIKE = "GET_MY_LIKE";
const ADD_TAGS = "ADDTAGS";
const SEARCH_TAG = "SEARCH_TAG";

const getArticle = createAction(GET_ARTICLE, (_articles) => ({
  articles: _articles,
}));

const getMyArticle = createAction(GET_MY_ARTICLE, (_articles) => ({
  myArticles: _articles,
}));

const getMyLike = createAction(GET_MY_LIKE, (_articles) => ({
  myLikes: _articles,
}));

const addArticle = createAction(ADD_ARTICLE, (articles) => ({ articles }));
const addTags = createAction(ADD_ARTICLE, (tag) => ({ tag }));
const seachTag = createAction(SEARCH_TAG, (articles) => ({ articles }));

const initialState = {
  articles: [],
  myArticles: [],
  myLikes: [],
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

const getArticleAPI = (token) => {
  // const getArticleAPI = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://3.38.153.67/articles",
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(({ data }) => {
        console.log(data);
        const _articles = [];
        data.forEach((d) => _articles.push(d));
        dispatch(getArticle(_articles));
      })
      .catch((err) => {
        console.log(err);
        console.log("게시물 가져오기 실패!");
      });
  };
};

const searchTagAPI = (keyword) => {
  return function (dispatch) {
    apis.searchTag(keyword).then(({ data }) => {
      console.log(data);
      const _articles = [];
      data.forEach((d) => _articles.push(d));
      dispatch(seachTag(_articles));
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

const getMyArticleAPI = () => {
  return function (dispatch) {
    apis.getMyArticle().then(({ data }) => {
      const _articles = [];
      data.forEach((d) => _articles.push(d));
      dispatch(getMyArticle(_articles));
    });
  };
};

const getMyLikeAPI = () => {
  return function (dispatch) {
    apis.getMyLike().then(({ data }) => {
      const _articles = [];
      data.forEach((d) => _articles.push(d));
      dispatch(getMyLike(_articles));
    });
  };
};

const createArtiApi = (tags, token) => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user.user;
    const _image = getState().image.preview;
    console.log(_user);
    console.log(_image);

    const user_info = {
      uid: _user.uid,
      nickname: _user.nickname,
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
      console.log("이미지 업로드");
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          return url;
        })
        .then((url) => {
          axios({
            method: "post",
            url: "http://3.38.153.67/pictures",
            data: {
              uid: _user.uid,
              image_url: url,
            },
            headers: {
              Authorization: `${token}`,
            },
          })
            .then(() => {
              console.log("저장성공");
              dispatch(
                addArticle({
                  ..._article,
                  ...user_info,
                  tags: [...tags],
                  image_url: url,
                })
              );
              history.replace("/");
              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              alert("게시글 작성에 실패하였습니다.");
              console.log(err);
            });
        })
        .catch((err) => {
          alert("이미지 저장에 실패하였습니다.");
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
    [GET_MY_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.myArticles = action.payload.myArticles;
      }),
    [GET_MY_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.myLikes = action.payload.myLikes;
      }),
    [SEARCH_TAG]: (state, action) =>
      produce(state, (draft) => {
        draft.searchRes = action.payload.articles;
      }),
  },
  initialState
);

export const actionCreators = {
  getArticleAPI,
  getOneArticleAPI,
  createArtiApi,
  addTags,
  getMyArticleAPI,
  getMyLikeAPI,
  searchTagAPI,
};
