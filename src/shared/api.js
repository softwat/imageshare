import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.defaults.headers.common["Authorization"] = "success";

const TEST_URL = (site) => `http://localhost:3003/${site}`;

export const apis = {
  signup: (id, email, pwd, nickname) =>
    // api.post("/user/signup", {
    api.post(TEST_URL("signup"), {
      login_id: id,
      email: email,
      password: pwd,
      nickname: nickname,
    }),

  login: (id, pwd) =>
    api.post(TEST_URL("login"), {
      login_id: id,
      password: pwd,
    }),

  createArticle: (uid, image, tags, date) =>
    api.post(TEST_URL("pictures"), {
      uid: uid,
      image_url: image,
      tags: [...tags],
      created_date: date,
    }),

  loginCheck: (id) =>
    api.get(TEST_URL("idCheck")).then((res) => {
      console.log(res);
    }),

  // logOut: () => api.get(TEST_URL("logout")),

  // .catch(console.log("no")),
};
