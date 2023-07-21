import axios from "axios";
import { UserSelect } from "../assets/types";

const fetchData = async (userInfo: UserSelect) => {
  const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
  const client_secret = process.env.REACT_APP_NAVER_CLIENT_SECRET;
  const api_url = "api/v1/datalab/shopping/category/keyword/age";

  const response = await axios.post(
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
  return response;
};

export default fetchData;
