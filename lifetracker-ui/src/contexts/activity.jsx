import { createContext, useContext, useState } from "react"
import apiClient from "services/apiClient"

const ActivityContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    const [activity, setActivity] = useState([])
    const [initialized, setInitialized] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState(null)

    
    return (
        <AuthContext.Provider value ={authValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
}

export const ActivityContext = () => useContext(ActivityContext)