import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { addCookie, delCookie } from "../../shared/cookie";
import { apis } from "../../shared/api";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  user_id: true,
  is_login: true,
};

const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    dispatch(setUser(user));
    // history.push("/detail");
  };
};

const loginCheck = (id) => {
  return function (dispatch) {
    apis
      .loginCheck(id)
      .then((res) => {
        dispatch(setUser({ user_id: true }));
      })
      .catch((err) => {
        dispatch(setUser({ user_id: false }));
        window.alert("이미 존재하는 아이디 또는 이메일입니다.");
      });
  };
};

const signUpDB = (id, email, pwd, nickname) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(id, email, pwd, nickname)
      .then(() => {
        console.log("login success");
        dispatch(setUser({ user: id }));
        history.replace("/");
      })
      .catch((err) => {
        console.log("no login so sad");
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        addCookie("is_login", "success");
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
  },
  initialState
);

const actionCreators = {
  logIn,
  setUser,
  logOut,
  getUser,
  loginAction,
  signUpDB,
  loginCheck,
};

export { actionCreators };
