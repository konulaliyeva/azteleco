import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DependencyList } from "react";

export type HeaderSliceType = {
  title?: string | null;
  deps?: string | null | DependencyList;
};
const initialState: HeaderSliceType = {
  title: null,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderContent: (state, action: PayloadAction<HeaderSliceType>) => {
      state.title = action.payload.title || null;
    },
  },
});
export const { setHeaderContent } = headerSlice.actions;
export default headerSlice.reducer;
