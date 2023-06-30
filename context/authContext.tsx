import { createContext, ReactNode, useEffect, useReducer } from "react";
import api from "../actions/fetchApiAction";
import SplashScreen from "../components/common/SplashScreen";
import {
  AUTH_ACTION_TYPE,
  AUTH_CONTEXT_INTERFACE,
  AUTH_CONTEXT_REDUCER,
} from "../models/authContextModel";
import { authReducer } from "./reducer";

interface Props {
  children: ReactNode;
}

const initialState: AUTH_CONTEXT_REDUCER = {
  userLoginStatus: false,
  initialized: true,
  user: null,
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

  const initializeChange = (val: boolean) => {
    dispatch({
      type: AUTH_ACTION_TYPE.ON_INITIALIZING_STATE_CHANGE,
      payload: val,
    });
  };

  const checkUserInfo = async () => {
    initializeChange(true);
    try {
      if (!state.userLoginStatus) {
        const res = await api.post("/auth/login", {
          email: "a1@yopmail.com",
          password: "123456",
        });

        if (res.status) {
          console.log("status", res);

          const info = await api.get("/auth/info");
          console.log(info, "info");
          

          // here update the user status
          initializeChange(false);
          return;
        }
      }
      throw new Error();
    } catch (err) {
      logOut();
      initializeChange(false);
    }
  };

  const logOut = async () => {
    dispatch({
      type: AUTH_ACTION_TYPE.ON_LOGOUT,
    });
  };

  useEffect(() => {
    checkUserInfo();
  }, []);

  if (state.initialized) {
    return <SplashScreen />;
  }

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
