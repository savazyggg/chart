import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  value: {
    startDate: string;
    endDate: string;
    timeUnit: string;
    category: string;
    keyword: string;
    device: string;
    gender: string;
    ages: string;
  };
}

const initialState: CommonState = {
  value: {
    startDate: "",
    endDate: "",
    timeUnit: "",
    category: "",
    keyword: "",
    device: "",
    gender: "",
    ages: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    confirm: (state, action: PayloadAction<CommonState["value"]>) => {
      state.value = action.payload;
    },
    // setStartDate(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
    // setEndDate(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
    // setTimeUnit(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
    // setCategory(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
    // setKeyword(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
    // setDevice(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
    // setGender(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
    // setAges(state, action: PayloadAction<string>) {
    //   state.startDate = action.payload;
    // },
  },
});

export const { confirm } = userSlice.actions;

export default userSlice.reducer;
