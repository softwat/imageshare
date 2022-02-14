import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImgUpload from "../shared/ImgUpload";
import ImgWrap from "../components/ImgWrap";
import InputTag from "../element/InputTag";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/article";

const Create = (props) => {
  const {
    article_id,
    writer_id,
    writer_nickname,
    image_url,
    tags,
    create_date,
  } = props;

  const dispatch = useDispatch();
  const uploadImg = useSelector((state) => state.image);
  const user_info = useSelector((state) => state.user);
  console.log(user_info.is_login);
  console.log(uploadImg);

  React.useEffect(() => {
    if (!uploadImg?.preview || !uploadImg.uploading) {
      return;
    }
  }, []);
  const createArti = () => {
    dispatch(postActions.createArtiApi(["cute", "like"]));
  };
  // if (!user_info.is_login) {
  //   alert("로그인 후 게시글을 작성 할 수 있습니다.");
  //   history.replace("/");
  //   return <div>{/* <h1>로그인 후 게시글을 작성 할 수 있습니다.</h1> */}</div>;
  // }
  return (
    <CreateStyle>
      <h2>이미지 업로드</h2>
      <ImgUpload />
      <ImgWrap image_url={uploadImg?.preview} />
      <div className="input_tag">
        <InputTag />
      </div>
      <button
        disabled={uploadImg?.uploading ? "disabled" : ""}
        onClick={() => {
          createArti();
        }}>
        올리기
      </button>
    </CreateStyle>
  );
};

Create.defatulProps = {
  article_id: "",
  writer_id: "",
  writer_nickname: "summer",
  image_url: "",
  tags: [],
  create_date: "YYYY-MM-DD hh:mm:ss",
};
const CreateStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    margin: 20px 0;
  }

  input {
    border: solid 1px #ccc;
  }

  .input_tag {
    margin: 10px;
    margin-left: -6px;
  }

  button {
    font-size: 16px;
    padding: 6px 10px;
    border: none;
    background-color: red;
    color: #fff;
    cursor: pointer;
  }
`;
export default Create;
