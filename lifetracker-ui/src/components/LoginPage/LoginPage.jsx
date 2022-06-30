import * as React from "react"
import "./LoginPage.css"
import LoginForm from "../LoginForm/LoginForm"

export default function LoginPage({setAppState}) {
    return (
        <div className="login-page">
            <div className="card">Login</div>
            <LoginForm setAppState={setAppState}/>
        </div>
    )
}