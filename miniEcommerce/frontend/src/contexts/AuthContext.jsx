import { createContext, useState } from "react"

export const AuthContext=createContext()

export const AuthContextProvider = ({children}) => {
    const [isAuth,setisAuth]=useState(false)

    const Login=()=>{
        setisAuth(true)
    }
    const Logout=()=>{
        setisAuth(false)
    }
  return <AuthContext.Provider value={{isAuth,Login,Logout}}>{children}</AuthContext.Provider>
}
