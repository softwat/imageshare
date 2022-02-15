import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json,',
    },
});

// api.interceptors.request.use((config) => {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

api.defaults.headers.common['Authorization'] = 'success';

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

    logout: () => api.post(TEST_URL('/user/logout')),

    createArticle: ({
        uid,
        image_url,
        writer_id,
        article_id,
        writer_nickname,
        tags,
        created_date,
    }) =>
        api.post(TEST_URL('pictures'), {
            uid: uid,
            article_id: article_id,
            writer_id: writer_id,
            writer_nickname: writer_nickname,
            image_url: image_url,
            tags: [...tags],
            created_date: created_date,
        }),

    uploadImageUrl: url => api.post(TEST_URL('imageUrl'), { image_url: url }),

    detailArticle: () => api.get(TEST_URL('/detailArc')),

    getArticle: () => api.get(TEST_URL('articles')),
    getMyArticle: () => api.get(TEST_URL('myarticle')),
    getMyLike: () => api.get(TEST_URL('mylike')),

    delArticle: articleId => api.delete(TEST_URL(`pictures/${articleId}`)),
    // detailArticle: (id) => api.get(TEST_URL(`/pictures/${articleid}`)),
};
