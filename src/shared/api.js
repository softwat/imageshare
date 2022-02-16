import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {},
});

// api.interceptors.request.use((config) => {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

// api.defaults.headers.common["Authorization"] = "success";

const TEST_URL = (site) => `http://localhost:3003/${site}`;

export const apis = {
  signup: ({ id, email, pwd, nickname }) =>
    api.post("http://3.38.153.67/user/signup", {
      username: id,
      email: email,
      password: pwd,
      nickname: nickname,
    }),

  setlogin: ({ id, pwd }) =>
    api.post("http://3.38.153.67/user/login", {
      username: id,
      password: pwd,
    }),

  logout: () => api.post(TEST_URL("/user/logout")),

  createArticle: ({
    uid,
    image_url,
    // writer_id,
    // article_id,
    // writer_nickname,
    // tags,
    // created_date,
  }) =>
    api.post("http://3.38.153.67/pictures", {
      uid: uid,
      // article_id: article_id,
      // writer_id: writer_id,
      // writer_nickname: writer_nickname,
      image_url: image_url,
      // tags: [...tags],
      // created_date: created_date,
    }),

  uploadImageUrl: (url) => api.post(TEST_URL("imageUrl"), { image_url: url }),

  detailArticle: () => api.get(TEST_URL("/detailArc")),

  getArticle: () => api.get("http://3.38.153.67/articles"),
  getMyArticle: () => api.get(TEST_URL("myarticle")),
  getMyLike: () => api.get(TEST_URL("mylike")),
  searchTag: (_keyword) => {
    const keyword = encodeURI(encodeURIComponent(_keyword));
    console.log(keyword); //안녕
    // utf8 %EC%95%88%EB%85%95
    // uni-code %25EC%2595%2588%25EB%2585%2595
    return api.get(TEST_URL(keyword));
  },

  delArticle: (articleId) => api.delete(TEST_URL(`pictures/${articleId}`)),
  // detailArticle: (id) => api.get(TEST_URL(`/pictures/${articleid}`)),
};

export default api;
