import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import rootReducer from "../reducers";

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};


const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development",
  });

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
const wrapper = createWrapper<AppStore>(makeStore);
export default wrapper;
