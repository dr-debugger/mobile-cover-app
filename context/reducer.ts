import {
  AUTH_CONTEXT_REDUCER,
  USER_CONTEXT_ACTION,
} from "../models/authContextModel";

export const authReducer = (
  state: AUTH_CONTEXT_REDUCER,
  action: USER_CONTEXT_ACTION
) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }
  }
};
