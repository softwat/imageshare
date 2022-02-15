import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { addCookie, delCookie, getCookie } from "../../shared/cookie";
import { apis } from "../../shared/api";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const CHECK_LOGIN = "CHECK_LOGIN";
// const CHECK_DUPLICATE = "CHECK_DUPLICATE";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const checkLogin = createAction(CHECK_LOGIN, () => ({}));

const initialState = {
  user: null,
  is_login: false,
};

// 회원가입 미들웨어 api
const signUpApi = async (user) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(user)
      .then((res) => {
        console.log("login success");
        console.log(res);
        dispatch(
          setUser({
            uid: res.uid,
            login_id: user.id,
            nickname: user.nickname,
            password: user.pwd,
            email: user.email,
          })
        );
        history.replace("/");
      })
      .catch((err) => {
        console.log("no signup so sad");
        console.log(err);
      });
  };
};

// 로그인 미들웨어 api
const loginActionApi = (user) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .setlogin(user)
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            // uid: res.uid,
            username: user.id,
            password: user.pwd,
          })
        );
        const token = res.headers.authorization;
        addCookie("token", token);
        alert(`${user.id}님 반갑습니다.`);
        // history.replace("/");
      })
      .catch((err) => {
        console.log("no login so sad");
        console.log(err);
      });
  };
};

// 로그아웃 미들웨어 api
const logOutAction = () => {
  return function (dispatch, { history }) {
    apis.logout().then(() => {
      dispatch(logOut());
    });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        addCookie("is_login", true);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        delCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [CHECK_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = getCookie("is_login") ? true : false;
      }),
  },
  initialState
);

const actionCreators = {
  signUpApi,
  logOutAction,
  loginActionApi,
  getUser,
  checkLogin,
};

export { actionCreators };
