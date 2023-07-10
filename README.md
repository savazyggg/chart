# techLabs

## 지원자 정보

### 이름: 이윤지</br>

## 빌드 방법

craco를 이용해 프로젝트를 빌드 </br>
.jsx, .ts, .tsx 확장자를 가진 파일을 바벨 로더(babel-loader)를 이용해 트랜스파일링하도록 설정하였고, exclude에서는 node_modules 폴더에 있는 파일은 트랜스파일링에서 제외하도록 설정하였습니다. options에서는 바벨의 설정을 세부적으로 지정할 수 있습니다.</br>
ts-loader 대신 .tsx 확장자를 가진 파일은 컴파일된 결과를 캐싱해두었다가, 변경된 파일만 다시 컴파일하여 빌드시간을 단축할 수 있는 craco-ts-loader를 사용할 수 있도록 하였습니다.
</br>exclude에서는 이 파일들이 트랜스파일링에서 제외되도록 설정하고, options에서는 transpileOnly 옵션을 사용해 타입 체크를 하지 않도록 설정하였습니다. </br>

## 프로젝트 설명 </br>

<img width="587" alt="스크린샷 2023-06-18 오후 9 46 59" src="https://velog.velcdn.com/images/savazy_gg/post/50818c21-f1a5-41db-bfbe-8fd825e54cea/image.png">

### 기술스택:

axios, redux-tookit, redux-saga, typeScript, http-proxy-middleware, rechart</br>

### 기능구현:

연령별 트렌드 조회의 파라미터 (startDate, endDate, timeUnit, category, keyword, device, gender, ages)를 사용자가 입력 할 수 있는 페이지를 제작한다.

- 시작일자: 2017년 8월 1일 이전 날짜는 조회 불가능으로 해당 부분에 알림 추가
- 다중 선택: ages는 다중 선택이 가능함으로 유저입장에서 어떤 부분을 선택했는지 볼 수 있도록 버튼 추가, 해당 버튼 클릭하면 해당 나이 선택 취소
- 조회 버튼 비활성화: 필수로 선택해야 되는 값이 선택이 되지 않았거나, 2017년 8월 1일 이전 날짜 선택시 버튼 비활성화
- 차트 토글:

1.  persist에 유저의 데이터 항목이 남아있으면 새로고침해도 차트는 유지됨.
2.  persist에 데이터가 없거나, 필수값 입력후 조회 클릭하지 않았다면 차트는 보여지지 않음.

- Naver Open API 활용한 데이터 fetch

### 선택구현 사항 체크:

- Redux-Persist를 활용하여 새로고침 시, 연령별 트렌드 조회의 파라미터가 유지되도록 구성한다.

## React에서 오픈 API 사용시 CORS에러

### 이유</br>

<img width="587" alt="교차출처 리소스 공유" src="https://manbalboy.github.io/assets/img/post/it/2021/05/03.PNG">
: CORS(Cross-Origin Resource Sharing) 에러는 웹 브라우저에서 보안상의 이유로 다른 도메인에서 리소스를 요청할 때 발생할 수 있는 문제로, React에서 오픈 API를 사용할 때 CORS 에러가 발생하는 이유는, 보안 상의 이유로 브라우저에서 다른 도메인으로부터 리소스를 요청할 때, 서버에서 허용하지 않기 때문입니다.

클라이언트에서 외부 API로 요청을 보낼 때 흔히 겪는 시나리오는 다음과 같습니다.

- 클라이언트에서 외부 API 서버로 바로 요청을 보낸다. (서버 포트 5000번, 클라이언트 포트 3000번 가정)
- cors 에러 발생

### 해결 방법</br>

: http-proxy-middleware 라이브러리를 통해 프록시 서버를 구축

```createProxyMiddleware("/api",
     target: "https://openapi.naver.com",
     changeOrigin: true,
```

를 통하여, 로컬환경에서 http://localhost:3000/api로 시작되는 요청을 https://openapi.naver.com/api로 프록싱 해줍니다.</br>
따라서, 브라우저는 클라이언트와 서버의 출처가 다르지만 해당 미들웨어가 만져주면서 같은 것으로 받아들여 CORS문제가 일어나지 않습니다.
