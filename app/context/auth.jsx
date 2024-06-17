"use client";

import React, {createContext, useContext, useState, ReactNode, useEffect} from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

const AuthProvider= ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('token') ? 
        JSON.parse(localStorage.getItem('token')) : "";
        if (!storedToken) {
            router.push("/signin");
        } else {
            setIsAuthenticated(true);
        }
        console.log("again");
    }, [router]);

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };