import * as React from "react"
import "./LoginPage.css"
import LoginForm from "../LoginForm/LoginForm"

export default function LoginPage() {
    return (
        <div className="login-page">
            <div class="card">Login</div>
            <LoginForm/>
        </div>
    )
}