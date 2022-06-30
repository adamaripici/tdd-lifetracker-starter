import * as React from "react"
import "./Exercise.css"
import { useNavigate } from "react-router-dom"
import AccessForbidden from "../AccessForbidden/AccessForbidden"

export default function Exercise({ user, setAppState }) {
    const navigate = useNavigate()
    const isAuthenticated = Boolean(user?.email)

    const handleOnLogout = () => {
        setAppState({})
        navigate("/")
    }
    if (isAuthenticated) {
        return (
            <div className="exercise">
                Exercise
            </div>
        )
    } else {
        return (
            <div>
                <AccessForbidden setAppState={setAppState}/>
            </div>
        )
    }
    
}