import { createContext, ReactNode, useReducer } from "react";
import {
  AUTH_CONTEXT_INTERFACE,
  AUTH_CONTEXT_REDUCER,
} from "../models/authContextModel";
import { authReducer } from "./reducer";

interface Props {
  children: ReactNode;
}

const initialState: AUTH_CONTEXT_REDUCER = {
  userLoginStatus: false,
};

export const AuthContext = createContext<Partial<AUTH_CONTEXT_INTERFACE>>({
  ...initialState,
});

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = () => {
    // do nothing;
    console.log("login");
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
