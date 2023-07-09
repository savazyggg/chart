import axios from "axios";

const fetchData = (userInfo) => {
  const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
  const client_secret = process.env.REACT_APP_NAVER_CLIENT_SECRET;
  const api_url = "api/v1/datalab/shopping/category/keyword/age";

  try {
    const response = axios.post(
      api_url,
      {
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        timeUnit: userInfo.timeUnit,
        category: userInfo.category,
        keyword: userInfo.keyword,
        device: userInfo.device,
        gender: userInfo.gender,
        ages: userInfo.ages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Naver-Client-Id": client_id,
          "X-Naver-Client-Secret": client_secret,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;
