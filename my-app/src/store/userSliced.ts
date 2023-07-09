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
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    confirm: (state, action: PayloadAction<CommonState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { confirm } = userSlice.actions;
export default userSlice.reducer;
