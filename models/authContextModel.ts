export interface AUTH_CONTEXT_REDUCER {
  userLoginStatus: boolean;
}

export interface AUTH_CONTEXT_INTERFACE extends AUTH_CONTEXT_REDUCER {
  login: () => void;
}

export enum AUTH_ACTION_TYPE {
  CHANGE_lOGIN = "CHANGE_lOGIN",
}

export interface USER_CONTEXT_ACTION {
  type: AUTH_ACTION_TYPE;
  payload: unknown;
}
