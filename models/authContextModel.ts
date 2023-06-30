
export interface AUTH_CONTEXT_INTERFACE extends AUTH_CONTEXT_REDUCER {
  login: () => void;
}

export interface AUTH_CONTEXT_REDUCER {
  userLoginStatus: boolean;
  user: Object | null;
  initialized: boolean;
  userRole?: string;
}

export enum AUTH_ACTION_TYPE {
  ON_LOGOUT = "ON_LOGOUT",
  ON_LOGIN_SUCCESS = "ON_LOGIN_SUCCESS",
  ON_INITIALIZING_STATE_CHANGE = "ON_INITIALIZING_STATE_CHANGE",
}

export interface USER_CONTEXT_ACTION {
  type: AUTH_ACTION_TYPE;
  payload?: any;
}
