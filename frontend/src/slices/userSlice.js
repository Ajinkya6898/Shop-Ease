import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userName: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
