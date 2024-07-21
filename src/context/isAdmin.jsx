import { createContext, useState } from "react";

export const isAdminContext = createContext();

export default function AdminContextProvider({children}){
    const [isAdmin,setIsAdmin] = useState(false)

    function toggleAdmin(){
        setIsAdmin(!isAdmin)
        console.log(isAdmin);
    }
    return(
        <isAdminContext.Provider value={{isAdmin, toggleAdmin}}>{children}</isAdminContext.Provider>
    )
}