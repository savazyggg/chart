# techLabs

## 지원자 정보

이름: 이윤지
빌드 방법 : CRACO
프로젝트 설명 :

- 기술스택: axios, redux-tookit, redux-saga, typeScript, http-proxy-middleware, rechart
  선택구현 사항 체크:
- Antd를 활용하여 화면을 꾸민다. (디자인은 자유)
- Redux-Persist를 활용하여 새로고침 시, 연령별 트렌드 조회의 파라미터가 유지되도록 구성한다.
- Custom Hook에서 비즈니스 로직, 상태관리, 비동기처리를 따로 처리한다.

## React에서 오픈 API 사용시 CORS에러 이유

클라이어트에서 외부 API서버로 바로 요청을 보내서
해결 방법
client to server 찌르는게 아니라 server to server로 Middleware를 통해 요청한다.
