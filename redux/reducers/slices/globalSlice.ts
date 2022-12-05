import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "../../../models/reducerModel";
import { AppDispatch, RootState } from "../../stores";

const initialState: GlobalState = {
  demoState: "demo State",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    dummyReducer: (state, action: PayloadAction<string | null>) => {
      // logic goes here
      state.demoState = action.payload;
    },
  },
});

export const dummyReducer =
  (data: string) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    // this will work as thunk middleware
    console.log(getState());

    // do your async operation , after that dispatch actual action from here
    dispatch(globalSlice.actions.dummyReducer(data));
  };

export const globalReducer = globalSlice.reducer;
