import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.defaults.headers.common["Authorization"] = "success";

const TEST_URL = (site) => `http://localhost:3003/${site}`;

export const apis = {
  signup: ({ id, email, pwd, nickname }) =>
    api.post(TEST_URL("signup"), {
      login_id: id,
      email: email,
      password: pwd,
      nickname: nickname,
    }),

  login: ({ id, pwd }) => {
    return api.get(TEST_URL("login")).then((res) => res);
  },

  logout: () => api.get(TEST_URL("")),

  createArticle: ({ uid, image, tags, date }) =>
    api.post(TEST_URL("pictures"), {
      uid: uid,
      image_url: image,
      tags: [...tags],
      created_date: date,
    }),

  imageUrl: (url) => api.post(TEST_URL("imageUrl"), { image_url: url }),

  detailArticle: () => api.get(TEST_URL("/detailArc")),

  // logOut: () => api.get(TEST_URL("logout")),

  // .catch(console.log("no")),
};
