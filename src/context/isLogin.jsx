import { createContext, useState } from "react";

export const isLoginContext = createContext();

export default function isLoginContextProvider({children}){
    const [isLogin,setIsLogin] = useState(false)

    function toggleLogin(){
        setIsLogin(!isLogin)
    }
    return(
        <isLoginContext.Provider value={{isLogin, toggleLogin}}>{children}</isLoginContext.Provider>
    )
}