import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ImgUpload from '../shared/ImgUpload';
import ImgWrap from '../components/ImgWrap';
import { history } from '../redux/configureStore';
import { getCookie } from '../shared/cookie';
import { actionCreators as postActions } from '../redux/modules/article';

const Create = props => {
    const {
        article_id,
        writer_id,
        writer_nickname,
        image_url,
        tags,
        create_date,
    } = props;

    const dispatch = useDispatch();
    const tagRef = React.useRef();
    const [tag, setTag] = React.useState('');
    const uploadImg = useSelector(state => state.image);
    const user_info = useSelector(state => state.user);

    const token = getCookie('token');

    React.useEffect(() => {
        if (!uploadImg?.preview || !uploadImg.uploading) {
            return;
        }
    }, []);

    if (!token) {
        alert('로그인 후 게시글을 작성 할 수 있습니다.');
        history.replace('/');
    }

    const onChange = e => {
        setTag(e.target.value);
    };

    const createArti = () => {
        const toTag = tag.replace(/(\s*)/g, '').trim().split('#').splice(1);
        if (uploadImg.preview === null) {
            alert('이미지를 선택해주세요');
            return;
        } else if (!tag) {
            alert('태그를 입력해주세요');
            return;
        }
        dispatch(postActions.createArtiApi(toTag, getCookie('token')));
    };

    return (
        <CreateStyle>
            <h2>이미지 업로드</h2>
            <ImgUpload />
            <ImgWrap image_url={uploadImg?.preview} />
            <div className="input_tag">
                <InputTagStyle>
                    <input
                        type="text"
                        id="tag"
                        ref={tagRef}
                        onChange={onChange}
                        placeholder="태그를 입력해주세요 (필수) #귀여워 #가보자고"
                    />
                </InputTagStyle>
            </div>
            <button
                disabled={uploadImg?.uploading ? 'disabled' : ''}
                onClick={() => {
                    createArti();
                }}
            >
                올리기
            </button>
        </CreateStyle>
    );
};

Create.defatulProps = {
    article_id: '',
    writer_id: '',
    writer_nickname: 'summer',
    image_url: '',
    tags: [],
    create_date: 'YYYY-MM-DD hh:mm:ss',
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
        background-color: #ff54b0;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;
    }
`;

const InputTagStyle = styled.div`
    display: inline-block;
    min-width: 300px;
    padding: 6px;

    input {
        width: 100%;
        padding: 6px 10px;
        border-radius: 20px;
        border: solid 1px #ccc;
    }
    .tag {
        padding: 4px 6px;
        margin-right: 6px;
        border: solid 1px #ccc;
    }
`;
export default Create;
