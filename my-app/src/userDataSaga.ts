import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import fetchData from "./api/naverApi";
import { getUsersDataSuccess } from "./store/userSlice";

const userInfo = {
  startDate: "2017-08-01",
  endDate: "2017-09-30",
  timeUnit: "month",
  category: "50000000",
  keyword: "정장",
  device: "",
  gender: "",
  ages: ["10", "20"],
};

function* ageGetUsersDatafetch() {
  try {
    const response: AxiosResponse = yield call(fetchData, userInfo);
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

export type ReducerType = ReturnType<typeof userDataSaga>;
