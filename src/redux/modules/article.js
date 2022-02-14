import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { addCookie, delCookie } from '../../shared/cookie';
import { apis } from '../../shared/api';

const GET_ARTICLE = 'GET_ARTICLE';

const getArticle = createAction(GET_ARTICLE, _articles => ({
    articles: _articles,
}));

const initialState = {
    articles: [],
};

const getArticleAPI = () => {
    console.log('aaa');
    return function (dispatch) {
        apis.getArticle().then(({ data }) => {
            const _articles = [];
            data.forEach(d => _articles.push(d));
            dispatch(getArticle(_articles));
        });
    };
};

const getOneArticleAPI = id => {
    return function (dispatch) {
        apis.getArticle().then(({ data }) => {
            const _articles = [];
            data.forEach(d => _articles.push(d));
            dispatch(getArticle(_articles));
        });
    };
};

export default handleActions(
    {
        [GET_ARTICLE]: (state, action) =>
            produce(state, draft => {
                draft.articles = action.payload.articles;
                console.log(draft.articles);
            }),
    },
    initialState
);

export const actionCreators = {
    getArticleAPI,
    getOneArticleAPI,
};
