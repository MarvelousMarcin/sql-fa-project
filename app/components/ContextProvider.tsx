"use client";
import * as React from "react";
import { useReducer } from "react";
// react.d.ts
type CountProviderProps = { children: React.ReactNode };
type State = {
  token: string;
  auth: boolean;
};
export enum ActionKind {
  setAuth = "SET_AUTH",
  setToken = "SET_TOKEN",
}
type Dispatch = (action: Action) => void;
type Action = {
  type: ActionKind;
  payload: any;
};

const Context = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.setToken: {
      return { ...state, token: action.payload };
    }
    case ActionKind.setAuth: {
      return { ...state, auth: action.payload };
    }
  }
};

const initialState: State = { token: "", auth: false };

const ContextProvider = ({ children }: CountProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

function useUserContext() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error("useContext must be used within a ContextProvider");
  }
  return context;
}

export { ContextProvider, useUserContext };
