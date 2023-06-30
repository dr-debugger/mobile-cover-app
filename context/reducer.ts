import {
  AUTH_CONTEXT_REDUCER,
  USER_CONTEXT_ACTION,
} from "../models/authContextModel";

export const authReducer = (
  state: AUTH_CONTEXT_REDUCER,
  action: USER_CONTEXT_ACTION
) => {
  switch (action.type) {
    case "ON_INITIALIZING_STATE_CHANGE": {
      return {
        ...state,
        initialized: action.payload,
      };
    }
    case "ON_LOGOUT": {
      return {
        ...state,
        userLoginStatus: false,
        user: null,
        userRole: "",
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
