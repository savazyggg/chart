import { call, put, takeEvery } from "redux-saga/effects";
import fetchData from "./api/naverApi";
import { getUsersDataSuccess } from "./store/userSlice copy";

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

function* ageGetUsersDatafetch(): Generator<any, any, any> {
  const users = yield call(fetchData, userInfo);
  yield put(getUsersDataSuccess(users));
}
function* userDataSaga() {
  yield takeEvery("user/getUsersDataFetch", ageGetUsersDatafetch);
}

export default userDataSaga;
