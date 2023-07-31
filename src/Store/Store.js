import { configureStore, combineReducers } from "@reduxjs/toolkit";
import BandReducer from "./Slices/BandIdSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./Slices/UserIdSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  band: BandReducer,
  user: UserReducer,
});

const persistReduhcer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistReduhcer,
});
