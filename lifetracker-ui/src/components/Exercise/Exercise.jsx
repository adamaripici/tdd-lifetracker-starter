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
                <div className="banner"><h1>Exercise</h1></div>
                <div className="content">
                    <div className="exerciseOverview">
                        <div className="header">
                            <h3>Overview</h3>
                            <button className="Button outlune small outline gold">Add Exercise</button>
                        </div>
                    </div>
                </div>
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