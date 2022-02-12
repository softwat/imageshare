import instance from "../../shared/api";

const getArticle = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/some")
      .then((res) => {
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
      })
      .catch((err) => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("에러 났어!");
      });
  };
};

const actionCreators = {
  getArticle,
};

export { actionCreators };
