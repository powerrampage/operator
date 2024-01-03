import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRoles } from "types";

type UserDto = any;

export interface UserState {
  userInfo: UserDto;
  userToken: string | null;
  role: UserRoles | null;
}

const initialState: UserState = {
  userInfo: {} as UserDto,
  userToken: null, // for storing the JWT
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, { payload }) {
      state.userToken = payload;
    },
    setUserInfo(state, { payload }: PayloadAction<UserDto>) {
      state.userInfo = payload;
    },
    setUserRole(state, { payload }: PayloadAction<UserState["role"]>) {
      state.role = payload;
    },
    setLogout(state) {
      state.userToken = null;
      state.userInfo = {};
      state.role = null;
    },
  },
});

export const { setToken, setLogout, setUserInfo, setUserRole } = userSlice.actions;
export const userState = userSlice.reducer;
