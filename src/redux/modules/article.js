import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import { actionCreators as imageActions } from "./image";
import { apis } from "../../shared/api";
import { storage } from "../../shared/firebase";

const GET_ARTICLE = "GET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_LIKE = "ADD_LIKE";
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
const addLike = createAction(ADD_LIKE, (myLikes) => ({ myLikes }));
const addTags = createAction(ADD_ARTICLE, (tag) => ({ tag }));
const seachTag = createAction(SEARCH_TAG, (articles) => ({ articles }));

const initialState = {
  articles: [],
  myArticles: [],
  myLikes: [],
  likeCount: 0,
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
  return function (dispatch) {
    console.log("get article!!");
    axios({
      method: "get",
      url: "http://3.38.153.67/articles",
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(({ data }) => {
        const _articles = [];
        data.forEach((d) => _articles.push(d));
        const _articles_sort = _articles.sort(
          (a, b) => b.article_id - a.article_id
        );
        dispatch(getArticle(_articles_sort));
      })
      .catch((err) => {
        console.log(err);
        console.log("게시물 가져오기 실패!");
      });
  };
};

const likeApi = (article_id, uid, token) => {
  return function (dispatch, getState) {
    axios({
      method: "post",
      url: "http://3.38.153.67/pictures/like",
      headers: {
        Authorization: `${token}`,
      },
      data: { article_id, uid },
    })
      .then((data) => {
        const _target_likes = getState().article.articles;
        const target_likes = _target_likes.find(
          (v) => v.article_id === article_id
        );
        dispatch(addLike(article_id));
        // console.log(_target_likes);
        // console.log(data);
        // console.log(target_likes.liked_users);
        // console.log(article_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const searchTagAPI = (keyword, token) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: `http://3.38.153.67/pictures/${keyword}`,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(({ data }) => {
        console.log(data);
        const _articles = [];
        data.forEach((d) => _articles.push(d));
        dispatch(seachTag(_articles));
      })
      .catch((err) => console.log(err));
  };
};

const getOneArticleAPI = (id, token) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://3.38.153.67/articles",
      headers: {
        Authorization: `${token}`,
      },
    }).then(({ data }) => {
      const _articles = [];
      data?.forEach((d) => _articles.push(d));
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

    const user_info = {
      uid: _user.uid,
      nickname: _user.nickname,
      // writer_nickname: 'summer',
    };

    const _article = {
      ...initialArticle,
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
          console.log({
            data: {
              uid: _user.uid,
              image_url: url,
              tags: tags,
            },
          });
          axios({
            method: "post",
            url: "http://3.38.153.67/pictures",
            data: {
              uid: _user.uid,
              image_url: url,
              tags: tags,
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
    [ADD_LIKE]: (state, action) =>
      produce(state, (draft) => {
        if (draft.myLikes.find((like) => like === action.payload.myLikes)) {
          draft.myLikes = draft.myLikes.filter(
            (like) => like !== action.payload.myLikes
          );
        } else {
          draft.myLikes.push(action.payload.myLikes);
        }
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
  likeApi,
  getOneArticleAPI,
  createArtiApi,
  addTags,
  getMyArticleAPI,
  getMyLikeAPI,
  searchTagAPI,
  addLike,
};
