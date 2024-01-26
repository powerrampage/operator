import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRoles } from "types";

type UserDto = any;

export interface UserState {
  userInfo: UserDto;
  role: UserRoles | null;
}

const initialState: UserState = {
  userInfo: {} as UserDto,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<UserDto>) {
      state.userInfo = payload;
    },
    setUserRole(state, { payload }: PayloadAction<UserState["role"]>) {
      state.role = payload;
    },
    setLogout(state) {
      state.userInfo = {};
      state.role = null;
    },
  },
});

export const { setLogout, setUserInfo, setUserRole } = userSlice.actions;
export const userState = userSlice.reducer;
