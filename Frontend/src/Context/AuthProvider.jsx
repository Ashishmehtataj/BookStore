import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const AuthContext = createContext()

function AuthProvider({children}) {
    const initialAuthUser = localStorage.getItem("Users")
    const [authUser,setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser):undefined
    )
  return (
    <div>
      <AuthContext.Provider value={[authUser,setAuthUser]}>{children}</AuthContext.Provider>
    </div>
  )
}
export const useAuth=()=>useContext(AuthContext);
export default AuthProvider;