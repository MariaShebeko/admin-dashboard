import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239c72c00017f",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
