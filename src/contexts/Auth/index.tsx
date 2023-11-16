import React, { createContext } from "react";
import { IContext, IAuthContext } from "./types";

export const AuthContext = createContext<IContext>({}as IContext)


export function AuthProvider({ children }:IAuthContext){


  return (
    <AuthContext.Provider value={{
      authenticated: true
    }}>
      {children}
    </AuthContext.Provider>
  )
}