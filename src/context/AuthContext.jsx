import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [isauthenticated, setAuthenticated] = useState(false)
    const value = { isauthenticated, setAuthenticated }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}