import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userName: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { userName, password } = action.payload;
      if (!userName || !password) return;

      state.name = "Ajinkya Joshi";
      state.userName = userName;
      state.isLoggedIn = true;
      const userInfo = {
        userName,
        name: state.name,
        isLoggedIn: state.isLoggedIn,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    logout() {
      localStorage.removeItem("userInfo");
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
