import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  asGuest: false,
  firstTime: true,
};

export const fitnessSlice = createSlice({
  name: "fitness",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setAsGuest: (state, action) => {
      state.asGuest = action.payload;
    },
    setFirstTime: (state, action) => {
      state.asGuest = action.payload;
    },
  },
});

export const { setLoggedIn, setAsGuest, setFirstTime } = fitnessSlice.actions;

export default fitnessSlice.reducer;
