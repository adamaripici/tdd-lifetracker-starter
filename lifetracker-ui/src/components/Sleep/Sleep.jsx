import * as React from "react"
import "./Sleep.css"
import { useNavigate } from "react-router-dom"
import AccessForbidden from "../AccessForbidden/AccessForbidden"

export default function Sleep({ user, setAppState }) {
    const navigate = useNavigate()
    const isAuthenticated = Boolean(user?.email)

    const handleOnLogout = () => {
        setAppState({})
        navigate("/")
    }
    if (isAuthenticated) {
        return (
            <div className="sleep">
                Sleep
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