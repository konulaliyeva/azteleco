import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./root/header_slice";

export const store = configureStore({
  reducer: {
    header: headerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
