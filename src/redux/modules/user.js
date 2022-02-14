import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { addCookie, delCookie } from "../../shared/cookie";
import { apis } from "../../shared/api";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const IS_LOGIN = "IS_LOGIN";
// const CHECK_DUPLICATE = "CHECK_DUPLICATE";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

// 회원가입 미들웨어 api
const signUpApi = (user) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(user)
      .then((res) => {
        console.log("login success");
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
        dispatch(
          setUser({
            uid: res.uid,
            login_id: user.id,
            password: user.pwd,
          })
        );
        console.log("login success");
        alert(`${user.id}님 반갑습니다.`);
        history.replace("/");
      })
      .catch((err) => {
        console.log("no login so sad");
        console.log(err);
      });
  };
};

const isLoginApi = () => {
  return function (dispatch, { history }) {
    apis.isLogin().then(() => {
      dispatch(logOut());
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
  },
  initialState
);

const actionCreators = {
  signUpApi,
  logOutAction,
  loginActionApi,
  getUser,
};

export { actionCreators };

// const checkDuplicate = createAction(CHECK_DUPLICATE, (user_id) => ({
//   user_id,
// }));

// const checkDuplicate = createAction(CHECK_DUPLICATE, (user_id) => ({
//   user_id,
// }));

// 아이디 중복확인
// const loginCheckApi = (id) => {
//   return function (dispatch) {
//     apis
//       .loginCheck(id)
//       .then((res) => {
//         console.log(res.data[0]);

//         if (res.data[0] === true) {
//           dispatch(checkDuplicate(true));
//           window.alert("사용 가능한 아이디입니다.");
//         } else {
//           dispatch(checkDuplicate(false));
//           window.alert("이미 존재하는 아이디 또는 이메일입니다.");
//         }
//       })
//       .catch((err) => {
//         dispatch(checkDuplicate(false));
//       });
//   };
// };
//
