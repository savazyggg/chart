- 연령별 트렌드 조회의 **파라미터** (startDate, endDate, timeUnit, category, keyword, device, gender, ages)**를 사용자가 입력 할 수 있는 페이지**를 제작한다.
- 발급받은 API KEY들은 **.env** 파일에 저장한 후 import 하여 사용하고 gitignore 파일에 .env를 저장한다
- Naver Open API 활용 시 발생하는 **CORS 이슈**에 대한 해결방법을 [README.md](http://README.md) 파일에 간단히 작성한다.
- Chart Library(recharts.js 등)를 활용하여 **조회 결과에 대한 데이터를 그래프로** 보여준다.
- 연령별 트렌드 조회의 파라미터 **ages** 를 **다중 선택**할 수 있도록 구현한다.

localhost/:1 Access to fetch at 'https://openapi.naver.com/v1/datalab/shopping/categories' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

React에서 오픈 API 사용시 CORS에러 이유
클라이어트에서 외부 API서버로 바로 요청을 보내서
해결 방법
client to server 찌르는게 아니라 server to server로 Middleware를 통해서 찌른다.

package.json에 추가
"proxy":"https://openapi.naver.com"
fetch에서 api 변경 'https://openapi.naver.com/v1/datalab/shopping/categories' -> "/v1/datalab/shopping/categories"
mode: "no-cors"추가
위의 방식으로

해결 안됨.

해당 방식은 서버로 배포나 github page 배포 시에는

CORS 문제를 해결할 수 없으며 개발환경에서만 적용됩니다 💦

또한

여러 개를 호출할 수 없고 1개만 가능합니다 😅

client to server 찌르는게 아니라 server to server로 Middleware를 통해서 찌른다.로 미들웨어 따로 셋팅

👏👏👏
