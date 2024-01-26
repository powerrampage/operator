import { createSelector } from "reselect";
import { AppState } from "store";

export const selectUserState = (state: AppState) => {
  return state.userState;
};

export const selectUserInfo = createSelector(selectUserState, (state) => state);

export const selectUserRole = createSelector(selectUserState, (state) => state.role);
