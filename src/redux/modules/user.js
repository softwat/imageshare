import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { addCookie, delCookie } from '../../shared/cookie';
import { apis, api } from '../../shared/api';

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
// const CHECK_DUPLICATE = "CHECK_DUPLICATE";

const setUser = createAction(SET_USER, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

const initialState = {
    user: null,
    is_login: false,
};

// 회원가입 미들웨어 api
const signUpApi = (id, email, pwd, nickname) => {
    return function (dispatch, getState, { history }) {
        apis.signup(id, email, pwd, nickname)
            .then(res => {
                console.log('login success');
                dispatch(
                    setUser({
                        // uid: res.uid,
                        login_id: id,
                        nickname: nickname,
                        password: pwd,
                        email: email,
                    })
                );
                history.replace('/');
            })
            .catch(err => {
                console.log('no signup so sad');
                console.log(err);
            });
    };
};

// 로그인 미들웨어 api
const loginActionApi = (id, pwd) => {
    return async function (dispatch, getState, { history }) {
        const user = { id, pwd };
        const _user = await apis.login(user);
        console.log(_user);
        // .then(res => {
        //     console.log(res);
        //     alert(`${id}님 반갑습니다!`);
        //     history.replace('/');
        //     dispatch.setUser({
        //         login_id: id,
        //         password: pwd,
        //     });
        // })
        // .catch(() => {
        //     alert('로그인에 실패하였습니다.');
        // });
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
            produce(state, draft => {
                addCookie('is_login', 'success');
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, draft => {
                delCookie('is_login');
                draft.user = null;
                draft.is_login = false;
            }),
        [GET_USER]: (state, action) => produce(state, draft => {}),
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
