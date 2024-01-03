import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userState } from "./user";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// @ts-ignore
import { encryptTransform } from "redux-persist-transform-encrypt";

const userPersistReducer = persistReducer(
  {
    key: "user",
    storage,
    transforms: [encryptTransform({ secretKey: "my-house123" })],
  },
  userState
);

const rootReducer = combineReducers({
  userState: userPersistReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_ENV === "dev",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);

export * from "./user";

export default store;
