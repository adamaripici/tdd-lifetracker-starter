import {createContext, useState, useContext, useEffect} from 'react'
import apiClient from "../services/apiClient"

const NutritionContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    return (
        <AuthContext.Provider value ={authValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)