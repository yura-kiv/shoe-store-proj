import { createSlice } from "@reduxjs/toolkit";

const localStorageNameConst = "user-auth-inf";

const initialState = JSON.parse(
  localStorage.getItem(localStorageNameConst)
) || {
  accessToken: null,
  user: null,
  isAuth: false,
};

const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const { accessToken, ...user } = action.payload;
      state.accessToken = accessToken;
      state.user = user;
      state.isAuth = true;
      localStorage.setItem(
        localStorageNameConst,
        JSON.stringify({
          accessToken: action.payload.accessToken,
          user: { ...action.payload },
          isAuth: true,
        })
      );
    },
    logout(state, action) {
      state.accessToken = null;
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem(localStorageNameConst);
    },
  },
});

export default userAuthSlice.reducer;
export const { login, logout } = userAuthSlice.actions;

export const selectCurrentUser = (state) => state.userAuthSlice.user;
export const selectCurrentToken = (state) => state.userAuthSlice.accessToken;
export const selectIsAuthState = (state) => state.userAuthSlice.isAuth;
