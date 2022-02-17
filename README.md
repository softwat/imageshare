# 🤳🏻 PIC!

</br>
다양한 이미지를 구경하고 소통해보세요!
</br>
</br>
[이미지 로고는 여기]
</br>
</br>
🔗 웹사이트 주소 : http://ryuryuryuryu.shop.s3-website.ap-northeast-2.amazonaws.com
</br>
</br>

## 1. 제작 기간 & 팀원 소개

</br>

🗓 2022.02.11 ~ 2022.02.17
</br>
</br>
👥 FE 팀원
유강현, 정재연
</br>
👥 BE 팀원
구민주, 김정근, 최규원
</br>
</br>

## 2. 사용 기술 및 서버, API 명세서

</br>

🛠 BE

- JAVA, Spring, JWT, MySQL, CORS, EC2

</br>

🎨 FE

- JavaScript, React, Axios, Firebase, S3
  </br>
  </br>
 
 
  API
- https://www.notion.so/6d159ef59e204014828f80bab7156e67?v=17eda0e9955042dfac80b9954aa2c39a

  </br>

## 3. 팀 노션 페이지

</br>
</br>

🔗 https://www.notion.so/99-7-Week-06-13956b3b1dee4ef8a603dd1fd188c1d3


</br>
</br>

## 4. 시연 영상

</br>
🔗 https://www.youtube.com/watch?v=yoxtgmjYTA8
</br>
</br>


## 5. 핵심 기능

</br>

#### 🔐 로그인, 회원가입

- Spring Security, JWT 를 이용하여 로그이나 회원가입 기능을 구현하였습니다.
- 서비스 사용성을 위해 회원가입 단계에 유저 닉네임을 추가하였습니다.
- 이메일, ID, 닉네임은 중복 가입이 불가능합니다.

#### 👀 이미지 조회하기

- 미가입자, 가입자 모두 사진 조회 가능합니다.
- 가입자는 내가 올린 이미지와 내가 좋아요 누른 이미지를 모아 볼 수 있습니다.

#### 🔖 이미지 태그

- 이미지는 태그로 검색할 수 있습니다.
- 이미지 업로드 시 해쉬태그로 태그를 부여합니다. (ex. #멍멍이#귀여워#댕댕이)

#### 💓 좋아요 기능

- 가입자는 마음에 드는 이미지에 좋아요 버튼을 누를 수 있습니다.
- 이미지를 마우스로 호버할 경우 좋아요 수와 좋아요 버튼이 보입니다.

#### 🎸 기타 기능

- 가입자는 자신의 게시글만 삭제할 수 있습니다. 본인의 게시글에만 삭제 버튼이 나타납니다.
