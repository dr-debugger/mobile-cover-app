import { combineReducers } from "@reduxjs/toolkit";
import { globalReducer } from "./slices/globalSlice";

const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
