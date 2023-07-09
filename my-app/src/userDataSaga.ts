import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import fetchData from "./api/naverApi";
import { getUsersDataSuccess } from "./store/userSlice";

interface GetUsersDataFetchAction {
  type: "user/getUsersDataFetch";
  payload: {
    startDate: string;
    endDate: string;
    timeUnit: string;
    title: string;
    keyword: string[];
    data: { [key: string]: { [key: string]: number }[] };
  };
}

type UserAction = GetUsersDataFetchAction;
function* ageGetUsersDatafetch(action: UserAction) {
  const userSelect = action.payload;
  try {
    const response: AxiosResponse = yield call(fetchData, userSelect);
    console.log("res", response);
    yield put(
      getUsersDataSuccess({
        startDate: response.data.startDate,
        endDate: response.data.endDate,
        timeUnit: response.data.timeUnit,
        title: response.data.results[0].title,
        keyword: response.data.results[0].keyword,
        data: response.data.results[0].data,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* userDataSaga() {
  yield takeLatest("user/getUsersDataFetch", ageGetUsersDatafetch);
}

export default userDataSaga;
