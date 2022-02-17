import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {},
});

const TEST_URL = site => `http://localhost:3003/${site}`;

export const apis = {
    signup: ({ id, email, pwd, nickname }) =>
        api.post('http://3.38.153.67/user/signup', {
            username: id,
            email: email,
            password: pwd,
            nickname: nickname,
        }),

    setlogin: ({ id, pwd }) =>
        api.post('http://3.38.153.67/user/login', {
            username: id,
            password: pwd,
        }),

    logout: () => api.post('http://3.38.153.67/user/logout'),

    uploadImageUrl: url => api.post(TEST_URL('imageUrl'), { image_url: url }),

    getMyArticle: () => api.get('http://3.38.153.67/myarticle'),
    getMyLike: () => api.get('http://3.38.153.67/myarticlemylike'),

    searchTag: _keyword => {
        const keyword = encodeURI(encodeURIComponent(_keyword));
        console.log(keyword); //안녕
        // utf8 %EC%95%88%EB%85%95
        // uni-code %25EC%2595%2588%25EB%2585%2595
        return api.get(`http://3.38.153.67/${keyword}`);
    },

    delArticle: articleId => api.delete(TEST_URL(`pictures/${articleId}`)),
    // detailArticle: (id) => api.get(TEST_URL(`/pictures/${articleid}`)),
};

export default api;
