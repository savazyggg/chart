import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  value: {
    startDate: string;
    endDate: string;
    timeUnit: string;
    title: string;
    keyword: string[];
    data: object[];
  };
  isLodding: boolean;
}

const initialState: CommonState = {
  value: {
    startDate: "",
    endDate: "",
    timeUnit: "",
    title: "",
    keyword: [],
    data: [],
  },
  isLodding: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersDataFetch: (state) => {
      state.isLodding = true;
    },
    getUsersDataSuccess: (
      state,
      action: PayloadAction<CommonState["value"]>
    ) => {
      state.value = action.payload;
      state.isLodding = false;
    },
    getUsersDataFailure: (state) => {
      state.isLodding = false;
    },
  },
});

export const { getUsersDataFetch, getUsersDataSuccess, getUsersDataFailure } =
  userSlice.actions;
export default userSlice.reducer;
