import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import fetchData from "./api/naverApi";
import { UserSelect } from "./assets/types";
import { getUsersDataSuccess } from "./store/userSlice";

interface GetUsersDataFetchAction {
  type: "user/getUsersDataFetch";
  payload: UserSelect;
}

type FetchData = (userInfo: UserSelect) => Promise<AxiosResponse<any, any>>;
type UserAction = GetUsersDataFetchAction;
function* ageGetUsersDatafetch(action: UserAction) {
  const userSelect = action.payload;
  try {
    const response: AxiosResponse = yield call<FetchData>(
      fetchData,
      userSelect
    );

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
