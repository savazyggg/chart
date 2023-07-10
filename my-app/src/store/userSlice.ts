import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonState } from "../assets/types";

const initialState: CommonState = {
  value: {
    startDate: "",
    endDate: "",
    timeUnit: "",
    title: "",
    keyword: [],
    data: [],
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersDataFetch: (state) => {
      state.isLoading = true;
    },
    getUsersDataSuccess: (
      state,
      action: PayloadAction<CommonState["value"]>
    ) => {
      state.value = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getUsersDataFetch, getUsersDataSuccess } = userSlice.actions;
export default userSlice.reducer;
